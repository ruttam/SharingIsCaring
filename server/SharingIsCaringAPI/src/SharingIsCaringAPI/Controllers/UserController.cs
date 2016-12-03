using Microsoft.AspNetCore.Mvc;
using SharingIsCaringAPI.Models;
using System.Linq;
using System.Net;

namespace SharingIsCaringAPI.Controllers
{
    public class UserController : Controller
    {
        SharingIsCaringContext context;

        public UserController(SharingIsCaringContext context)
        {
            this.context = context;
        }

        [HttpPost]
        public JsonResult CreateUser([FromBody] User user)
        {
            Error error = new Error();
            if (!context.Users.Where(usr => usr.email == user.email).Any())
            {
                context.Users.Add(user);
                context.SaveChanges();
                User u = context.Users.Last();
                Profile profile = new Profile();
                profile.user_id = u.id;
                context.Profiles.Add(profile);
                context.SaveChanges();
                Response.StatusCode = (int) HttpStatusCode.OK;
                return Json(u);
            }
            else
            {
                error.message = "Such email already exists!";
                error.name = "EmailExists";
                Response.StatusCode = (int)HttpStatusCode.Conflict;
                return Json(error);
            }
        }

        [HttpGet("{id}")]
        public JsonResult Get(int id)
        {
            return Json(context.Users.Where(user => user.id == id).First());
        }
    }
}
