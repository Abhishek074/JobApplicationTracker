using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using JobTracker.Data;
using JobTracker.Models;
using System.Threading.Tasks;

namespace JobTracker.Controllers
{
    [Route("api/jobs")]
    [ApiController]
    public class JobController : ControllerBase // Inherit from ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public JobController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetJobs()
        {
            var jobs = await _context.Jobs.ToListAsync();
            return Ok(jobs); // Now this will work
        }
    }
}
