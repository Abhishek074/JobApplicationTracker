using System.ComponentModel.DataAnnotations;

namespace JobTracker.Models
{
    public class Job
    {
        public Guid Id { get; set; } = Guid.NewGuid();
        [Required]
        public string JobId { get; set; }
        [Required]
        public string Company { get; set; }
        [Required]
        public string Position { get; set; }
        [Required]
        public string Location { get; set; }
        [Required]
        public string YearOfExperience { get; set; }
        public DateTime Timestamp { get; set; } = DateTime.UtcNow;
    }
}
