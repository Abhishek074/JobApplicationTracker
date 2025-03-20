using JobTracker.Data;
using JobTracker.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;
using System.Threading.Tasks;

namespace JobTracker.Controllers
{
    [Route("api/job")]
    [ApiController]
    public class JobApplicationController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobApplicationController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost("apply")]
        public async Task<IActionResult> ApplyForJob([FromBody] JobApplication application)
        {
            var userId = User.FindFirstValue(ClaimTypes.NameIdentifier);
            if (string.IsNullOrEmpty(userId))
                return Unauthorized(new { message = "User not authenticated" });

            // Validate if JobId exists in Jobs table
            var jobExists = await _context.Jobs.AnyAsync(j => j.JobId == application.JobId);
            if (!jobExists)
                return BadRequest(new { message = "Invalid JobId, job does not exist." });

            application.UserId = Guid.Parse(userId);  // Keep UserId as GUID
            application.Status = "Applied";
            application.AppliedDate = DateTime.UtcNow;

            _context.JobApplications.Add(application);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Job application submitted successfully" });
        }


        [Authorize]
        [HttpGet("myapplications")]
        public async Task<IActionResult> GetUserApplications()
        {
            // Get logged-in user's ID from JWT token
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(userIdString))
                return Unauthorized(new { message = "User not authenticated" });

            // Convert userId from string to Guid
            if (!Guid.TryParse(userIdString, out Guid userId))
                return BadRequest(new { message = "Invalid User ID format" });

            // Fetch all applications for this user with job details
            var applications = await _context.JobApplications
                .Where(a => a.UserId == userId)
                .Join(
                    _context.Jobs,
                    app => app.JobId,
                    job => job.JobId,
                    (app, job) => new
                    {
                        app.Id,
                        app.Status,
                        app.AppliedDate,
                        JobDetails = new
                        {
                            job.JobId,
                            job.Company,
                            job.Position,
                            job.Location,
                            job.YearOfExperience
                        }
                    })
                .ToListAsync();

            return Ok(applications);
        }

        [Authorize]
        [HttpPut("withdraw/{jobId}")]
        public async Task<IActionResult> WithdrawApplication(string jobId)
        {
            // Get the logged-in user's ID from JWT token
            var userIdString = User.FindFirstValue(ClaimTypes.NameIdentifier);

            if (string.IsNullOrEmpty(userIdString))
                return Unauthorized(new { message = "User not authenticated" });

            // Convert userId from string to Guid
            if (!Guid.TryParse(userIdString, out Guid userId))
                return BadRequest(new { message = "Invalid User ID format" });

            // Find the job application for the logged-in user
            var application = await _context.JobApplications
                .FirstOrDefaultAsync(a => a.JobId == jobId && a.UserId == userId);

            if (application == null)
                return NotFound(new { message = "Job application not found" });

            // Update status to "Withdrawn" and clear the AppliedDate
            application.Status = "Withdrawn";
            application.AppliedDate = null;

            _context.JobApplications.Update(application);
            await _context.SaveChangesAsync();

            return Ok(new { message = "Application withdrawn successfully" });
        }

    }
}

