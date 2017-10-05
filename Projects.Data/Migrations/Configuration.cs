using System.Collections.Generic;
using Projects.Data;
using Projects.Entities;
using Project = Projects.Entities.Project;

namespace Project.Entities.Migrations
{
    using System;
    using System.Data.Entity;
    using System.Data.Entity.Migrations;
    using System.Linq;

    internal sealed class Configuration : DbMigrationsConfiguration<ProjectsContext>
    {
        public Configuration()
        {
            AutomaticMigrationsEnabled = false;
            ContextKey = "Projects.Entities.ProjectsContext";
        }

        protected override void Seed(ProjectsContext context)
        {
            //This method will be called after migrating to the latest version.

            //  You can use the DbSet<T>.AddOrUpdate() helper extension method
            //  to avoid creating duplicate seed data.E.g.

            using (var db = new ProjectsContext())
            {                
                var u1 = new User {UserName = "admin", Name = "admin"};
                var u2 = new User {UserName = "user 1", Name = "user1"};
                var u3 = new User {UserName = "user 2", Name = "user2"};                
                db.Users.Add(u1);
                db.Users.Add(u2);
                db.Users.Add(u3);

                var ts1 = new TaskStatus {Name = "Created"};
                var ts2 = new TaskStatus { Name = "Assigned" };
                var ts3 = new TaskStatus { Name = "In Progress" };
                var ts4 = new TaskStatus { Name = "On Hold" };
                var ts5 = new TaskStatus { Name = "Done" };

                db.TaskStatuses.Add(ts1);
                db.TaskStatuses.Add(ts2);
                db.TaskStatuses.Add(ts3);
                db.TaskStatuses.Add(ts4);
                db.TaskStatuses.Add(ts5);                

                var task1 = new Task()
                {
                    StartDate = DateTime.Now.Date,                   
                    Title = "Task One",
                    Description = "Task description test",
                    Status = ts1,
                    Creator = u1,
                    AssignedUser = u3
                };
                var task2 = new Task()
                {
                    StartDate = DateTime.Now.Date,
                    Title = "Task Two",
                    Description = "Task description test",
                    Status = ts1,
                    Creator = u1,
                    AssignedUser = u2
                };
                var task3 = new Task()
                {
                    StartDate = DateTime.Now.Date,
                    Title = "Task Two",
                    Description = "Task description test",
                    Status = ts1,
                    Creator = u1,
                    AssignedUser = u3
                };
                db.Tasks.Add(task1);
                db.Tasks.Add(task2);
                db.Tasks.Add(task3);
                

                var project1 = db.Projects.Add(new Projects.Entities.Project
                {
                    Name = "Project One",
                    Description = "Project one description",
                    StartDate = DateTime.Now.Date
                });
                project1.Tasks = new List<Task>{ task1, task2, task3 };
                project1.Users = new List<User> {u2, u3};

                var project2 = db.Projects.Add(new Projects.Entities.Project
                {
                    Name = "Project 2",
                    Description = "Project two description",
                    StartDate = DateTime.Now.Date
                });
                db.Projects.Add(project1);
                db.Projects.Add(project2);
                db.SaveChanges();

            }
        }
    }
}
