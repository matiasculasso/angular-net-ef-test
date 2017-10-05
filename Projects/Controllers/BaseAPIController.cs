using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using Projects.Data;
using Newtonsoft.Json;
using System.Text;

namespace Projects.Controllers
{
    public class BaseAPIController : ApiController
    {
        protected readonly ProjectsContext ProjectsDB = new ProjectsContext();
        protected HttpResponseMessage ToJson(dynamic obj)
        {
            var response = Request.CreateResponse(HttpStatusCode.OK);
            response.Content = new StringContent(JsonConvert.SerializeObject(obj), Encoding.UTF8, "application/json");
            return response;
        }
    }
}
