using System.Data.Entity;
using Projects.Entities;

namespace Projects.Data
{
    public class ProjectsContext : DbContext 
    {
        public ProjectsContext() : base("name=default") 
        {
        }

        public DbSet<User> Users { get; set; }
        public DbSet<Entities.Project> Projects { get; set; }
        public DbSet<Task> Tasks { get; set; }
        public DbSet<TaskComment> TaskComments { get; set; }
        public DbSet<TaskStatus> TaskStatuses { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {            
            modelBuilder.Entity<User>().Property(m => m.Name).IsRequired();
            modelBuilder.Entity<User>().Property(m => m.UserName).IsRequired();            

            modelBuilder.Entity<Entities.Project>().Property(m => m.Name).IsRequired();
            modelBuilder.Entity<Entities.Project>().Property(m => m.StartDate).IsRequired();
            modelBuilder.Entity<Entities.Project>().Property(m => m.EndDate).IsOptional();

            modelBuilder.Entity<Task>().Property(m => m.Title).IsRequired();            
            modelBuilder.Entity<Task>().Property(m => m.StartDate).IsRequired();
            modelBuilder.Entity<Task>().Property(m => m.EndDate).IsOptional();

            modelBuilder.Entity<TaskComment>().Property(m => m.Comment).IsRequired();
            modelBuilder.Entity<TaskComment>().Property(m => m.Date).IsRequired();            

            modelBuilder.Entity<TaskStatus>().Property(m => m.Name).IsRequired();            

            base.OnModelCreating(modelBuilder);
        }
    }
}
