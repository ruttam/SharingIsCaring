using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SharingIsCaringAPI.Models
{
    public class FacebookProfile
    {
        
        public string accessToken { get; set; }
        public string email { get; set; }
        public int expiresIn { get; set; }

        public string first_name { get; set; }
        public int id { get; set; }
        public string last_name { get; set; }
        public string name { get; set; }
        public string signedRequest { get; set; }
        public string userID { get; set; }

    

    }
}
