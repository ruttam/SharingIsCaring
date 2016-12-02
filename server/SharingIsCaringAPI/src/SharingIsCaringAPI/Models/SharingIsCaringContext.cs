using Microsoft.EntityFrameworkCore;

namespace SharingIsCaringAPI.Models
{
    public class SharingIsCaringContext : DbContext
    {
        public SharingIsCaringContext(DbContextOptions<SharingIsCaringContext> options) : base(options) { }
        public DbSet<User> Users { get; set; }
        public DbSet<UserImage> UserImages { get; set; }
        public DbSet<Profile> Profiles { get; set; }
        public DbSet<Trip> Trips { get; set; }
    }
}
