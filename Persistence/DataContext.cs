using Domain;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace Persistence
{
    public class DataContext : IdentityDbContext<User>
    {
        public DataContext(DbContextOptions options) : base(options)
        {

        }

        public DbSet<Activity> Activities { get; set; }
        public DbSet<ActivityAttendee> ActivityAttendees { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);

            builder.Entity<ActivityAttendee>(x => x.HasKey(aa => new {aa.UserId, aa.ActivityId}));

            builder.Entity<ActivityAttendee>()
            .HasOne(u => u.User)
            .WithMany(a => a.Activities)
            .HasForeignKey(aa => aa.UserId);

            builder.Entity<ActivityAttendee>()
            .HasOne(act => act.Activity)
            .WithMany(att => att.Attendees)
            .HasForeignKey(aa => aa.ActivityId);
        }
    }
}