using JobTracker.Data;
using JobTracker.Models;
using JobTracker.Services;

using JobTracker.Models.DTOs;

using Microsoft.AspNetCore.Mvc;

using Microsoft.EntityFrameworkCore;

using System.Security.Cryptography;

using System.Text;

using System.Threading.Tasks;

namespace JobTracker.Controllers

{

    [Route("api/auth")]

    [ApiController]

    public class AuthController : ControllerBase

    {

        private readonly ApplicationDbContext _context;

        private readonly ITokenService _tokenService;

        public AuthController(ApplicationDbContext context, ITokenService tokenService)

        {

            _context = context;

            _tokenService = tokenService;

        }
        [HttpPost("signup")]
        public async Task<IActionResult> Signup([FromBody] UserSignupDto signupDto)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == signupDto.Email);
            if (existingUser != null)
            {
                return BadRequest(new { message = "Email is already registered" });
            }

            // Create password hash & salt
            using var hmac = new HMACSHA512();
            var passwordHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(signupDto.Password));
            var passwordSalt = hmac.Key;

            // Create new user object
            var newUser = new User
            {
                Username = signupDto.Username,
                Email = signupDto.Email,
                PasswordHash = passwordHash,
                PasswordSalt = passwordSalt
            };

            // Save user to database
            _context.Users.Add(newUser);
            await _context.SaveChangesAsync();

            // Generate JWT token
            var token = _tokenService.GenerateToken(newUser);

            return Ok(new { user = newUser, token });
        }

        [HttpPost("login")]

        public async Task<IActionResult> Login([FromBody] UserLoginDto loginDto)

        {

            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == loginDto.Email);

            if (existingUser == null)

                return Unauthorized(new { message = "Invalid credentials" });

            using var hmac = new HMACSHA512(existingUser.PasswordSalt);

            var computedHash = hmac.ComputeHash(Encoding.UTF8.GetBytes(loginDto.Password));

            if (!computedHash.SequenceEqual(existingUser.PasswordHash))

                return Unauthorized(new { message = "Invalid credentials" });

            var token = _tokenService.GenerateToken(existingUser);

            return Ok(new { user = existingUser, token });

        }

    }

}

