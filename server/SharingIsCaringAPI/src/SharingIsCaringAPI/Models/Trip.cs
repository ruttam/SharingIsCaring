using System;

namespace SharingIsCaringAPI.Models
{
    public class Trip
    {
        public int id { get; set; }
        public string from { get; set; }
        public string to { get; set; }
        public DateTime time { get; set; }
        public DateTime date { get; set; }
        public string passengers { get; set; }
        public int numberOfSeats { get; set; }
        public string car { get; set; }
    }
}
