using System;

namespace Projects.Entities
{
    public class TaskComment : IEntity
    {
        public int Id { get; set; }
        public DateTime Date { get; set; }
        public string Comment { get; set; }        
    }
}