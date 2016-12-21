using System;

namespace SharingIsCaringAPI.Models
{
    public class Profile
    {
        public int id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string telephoneNumber { get; set; }
        public string dateOfBirth { get; set; }
        public string profession { get; set; }
        public string about { get; set; }
        public string lastLoginDate { get; set; }
        public string lastLoginTime { get; set; }
        public int user_id { get; set; }
    }
}
