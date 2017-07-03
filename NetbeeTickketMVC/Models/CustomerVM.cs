using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace NetbeeTickketMVC.Models
{
    public class CustomerVM
    {
        public int Id { get; set; }
        public string FullName { get; set; }
        public string email { get; set; }
        public string subscriptionType { get; set; }
        public string subscriptionDate { get; set; }
        public bool isSubscribed { get; set; }
        public string subscriptionDetails { get; set; }
    }
}