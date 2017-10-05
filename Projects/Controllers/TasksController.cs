using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Projects.Entities;

namespace Projects.Controllers
{
    public class TasksController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(ProjectsDB.Tasks.ToArray());
        }

        public HttpResponseMessage Get(int id)
        {
            var task = ProjectsDB.Tasks.First(x => x.Id == id);
            return task != null ? ToJson(task) : new HttpResponseMessage(HttpStatusCode.NotFound);
        }

        public HttpResponseMessage Post([FromBody]Task value)
        {
            ProjectsDB.Tasks.Add(value);            
            return ToJson(ProjectsDB.SaveChanges());
        }

        public HttpResponseMessage Put(int id, [FromBody]Task value)
        {
            ProjectsDB.Entry(value).State = EntityState.Modified;
            return ToJson(ProjectsDB.SaveChanges());
        }
        public HttpResponseMessage Delete(int id)
        {
            var task = ProjectsDB.Tasks.First(x => x.Id == id);
            if (task == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            ProjectsDB.Tasks.Remove(task);
            ToJson(ProjectsDB.SaveChanges());
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}