using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Projects.Entities;

namespace Projects.Controllers
{
    public class UsersController : BaseAPIController
    {
        public HttpResponseMessage Get()
        {
            return ToJson(ProjectsDB.Users.ToArray());
        }

        public HttpResponseMessage Get(int id)
        {
            var user = ProjectsDB.Users.First(x => x.Id == id);
            return user != null ? ToJson(user) : new HttpResponseMessage(HttpStatusCode.NotFound);
        }

        public HttpResponseMessage Post([FromBody]User value)
        {
            ProjectsDB.Users.Add(value);
            return ToJson(ProjectsDB.SaveChanges());            
        }

        public HttpResponseMessage Put(int id, [FromBody]User value)
        {
            ProjectsDB.Entry(value).State = EntityState.Modified;
            return ToJson(ProjectsDB.SaveChanges());            
        }
        public HttpResponseMessage Delete(int id)
        {
            var user = ProjectsDB.Users.First(x => x.Id == id);
            if (user == null)
            {
                return new HttpResponseMessage(HttpStatusCode.BadRequest);
            }
            ProjectsDB.Users.Remove(user);
            return ToJson(ProjectsDB.SaveChanges());            
        }
    }
}
