using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace Projects.Controllers
{
    public class ProjectsController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(ProjectsDB.Projects.ToArray());
        }

        public HttpResponseMessage Get(int id)
        {
            var project = ProjectsDB.Projects.First(x => x.Id == id);
            return project != null ? ToJson(project) : new HttpResponseMessage(HttpStatusCode.NotFound);
        }

        public HttpResponseMessage Post([FromBody]Entities.Project value)
        {
            ProjectsDB.Projects.Add(value);
            return ToJson(ProjectsDB.SaveChanges());            
        }

        public HttpResponseMessage Put(int id, [FromBody]Entities.Project value)
        {
            ProjectsDB.Entry(value).State = EntityState.Modified;
            return ToJson(ProjectsDB.SaveChanges());            
        }
        public HttpResponseMessage Delete(int id)
        {
            var project = ProjectsDB.Projects.First(x => x.Id == id);
            if (project == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            ProjectsDB.Projects.Remove(project);
            ToJson(ProjectsDB.SaveChanges());
            return new HttpResponseMessage(HttpStatusCode.OK);
        }
    }
}