using JobTracker.Models;

namespace JobTracker.Services
{
    public interface ITokenService
    {
        string GenerateToken(User user);
    }
}
