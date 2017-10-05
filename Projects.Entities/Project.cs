using System;
using System.Collections.Generic;

namespace Projects.Entities
{
    public class Project: IEntity
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime? EndDate { get; set; }        
        public virtual List<User> Users { get; set; }
        public virtual List<Task> Tasks { get; set; }
    }
}