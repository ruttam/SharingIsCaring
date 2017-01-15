using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SharingIsCaringAPI.Models;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace SharingIsCaringAPI.Controllers
{
    public class TripController : Controller
    {
        SharingIsCaringContext context;

        public TripController(SharingIsCaringContext context)
        {
            this.context = context;
        }

        // GET: api/values
        [HttpGet("api/trips")]
        public JsonResult Get()
        {
            return Json(context.Trips.ToList());
        }

        // GET api/values/5
        [HttpGet("api/trip/{id}")]
        public JsonResult Get(int id)
        {
            return Json(context.Trips.First(t => t.id == id));
        }

        // POST api/values
        [HttpPost]
        public void Post([FromBody] string value)
        {
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        [HttpPost]
        public JsonResult CreateTrip([FromBody] Trip trip)
        {
            context.Trips.Add(trip);
            context.SaveChanges();
            Response.StatusCode = (int) HttpStatusCode.OK;
            return Json(trip);
    }

    // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
