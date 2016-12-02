using System;

namespace SharingIsCaringAPI.Models
{
    public class Profile
    {
        public int id { get; set; }
        public string name { get; set; }
        public string surname { get; set; }
        public string telephoneNumber { get; set; }
        public DateTime dateOfBirth { get; set; }
        public string profession { get; set; }
        public string about { get; set; }
        public DateTime lastLoginDate { get; set; }
        public DateTime lastLoginTime { get; set; }
        public int user_id { get; set; }
    }
}
