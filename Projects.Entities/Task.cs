using System;
using System.Collections.Generic;

namespace Projects.Entities
{
    public class Task : IEntity
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }
        public virtual User Creator { get; set; }
        public virtual User AssignedUser { get; set; }
        public virtual TaskStatus Status { get; set; }
        public virtual List<TaskComment> Comments { get; set; }
    }
}