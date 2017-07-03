using NetbeeTickketMVC.Models;
using Newtonsoft.Json;
using Newtonsoft.Json.Serialization;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace NetbeeTickketMVC.Controllers
{
    public class CustomerController : Controller
    {
        // GET: Customer
        public ActionResult GetCustomers()
        {
            List<CustomerVM> list = new List<CustomerVM>()
            {
                new CustomerVM()
                {
                    FullName = "Pavlos Stam"
                },

                new CustomerVM()
                {
                    FullName = "CG Designer"
                }
            };

            var camelCaseFormatter = new JsonSerializerSettings();
            camelCaseFormatter.ContractResolver = new CamelCasePropertyNamesContractResolver();

            var jsonResult = new ContentResult
            {
                Content = JsonConvert.SerializeObject(list, camelCaseFormatter),
                ContentType = "application/json"
            };
            //return jsonResult;
            return new HttpStatusCodeResult(404, "Ton bouloooooo...");
        }
    }
}