namespace JobTracker.Models
{
    public class JobApplication
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string JobId { get; set; }
        public string? Status { get; set; }  // NULL initially, updates later
        public DateTime? AppliedDate { get; set; } // NULL initially
    }
}
