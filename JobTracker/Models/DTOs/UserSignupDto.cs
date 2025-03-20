using System.ComponentModel.DataAnnotations;

namespace JobTracker.Models.DTOs
{
    public class UserSignupDto
    {
        [Required]
        public string Username { get; set; }

        [Required, EmailAddress]
        public string Email { get; set; }

        [Required, MinLength(6)]
        public string Password { get; set; }
    }
}
