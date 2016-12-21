using System;
using Microsoft.AspNetCore.Mvc;
using SharingIsCaringAPI.Models;
using System.Linq;
using System.Net;
using Microsoft.AspNetCore.Authorization;

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
            if (!context.Users.Any(usr => usr.email == user.email))
            {
                user.password = BCrypt.Net.BCrypt.HashPassword(user.password);
                context.Users.Add(user);
                context.SaveChanges();
                User u = context.Users.Last();
                Profile profile = new Profile
                {
                    user_id = u.id,
                    about = "",
                    dateOfBirth = "",
                    lastLoginDate = "",
                    lastLoginTime = "",
                    name = "",
                    surname = "",
                    profession = "",
                    telephoneNumber = ""
                };

                context.Profiles.Add(profile);
                context.SaveChanges();
                Response.StatusCode = (int) HttpStatusCode.OK;
                return Json("");
            }
            error.message = "there is a user with such email";
            error.name = "EmailExists";
            Response.StatusCode = (int)HttpStatusCode.Conflict;
            return Json(error);
        }

        [HttpPost]
        public JsonResult Login([FromBody] User user)
        {
            Error error = new Error();
            if (context.Users.Any(usr => usr.email == user.email))
            {
                User u = context.Users.First(usr => usr.email == user.email);
                if (BCrypt.Net.BCrypt.Verify(user.password, u.password))
                {
                    return Json(context.Profiles.Last(profile => profile.user_id == u.id));
                }
            }
            error.message = "Invalid credentials";
            error.name = "InvalidForm";
            Response.StatusCode = (int)HttpStatusCode.Unauthorized;
            return Json(error);
        }

        [HttpGet("api/user/emailExists/{email}")]
        public JsonResult EmailExists(string email)
        {
            Error error = new Error();
            if (context.Users.Any(usr => usr.email == email))
            {
                error.message = "there is a user with such email";
                error.name = "EmailExists";
                Response.StatusCode = (int)HttpStatusCode.Conflict;
                return Json(error);
            }
            return Json("");
        }

        [HttpGet("api/user/getProfile/{id:int}")]
        public JsonResult GetProfile(int id)
        {
            return Json(context.Profiles.First(profile => profile.user_id == id));
        }

        [HttpPost]
        public JsonResult SetProfile([FromBody] Profile profile)
        {
            Profile prof = context.Profiles.Last(p => p.user_id == profile.user_id);
            prof.name = profile.name;
            prof.surname = profile.surname;
            prof.telephoneNumber = profile.telephoneNumber;
            prof.dateOfBirth = profile.dateOfBirth;
            prof.profession = profile.profession;
            prof.about = profile.about;
            prof.lastLoginDate = DateTime.Now.Date.ToString("yyyy-MM-dd");
            prof.lastLoginTime = DateTime.Now.ToString("HH:mm");
            context.Profiles.Attach(prof);
            context.SaveChanges();
            return Json(prof);
        }

        [HttpGet("{id}")]
         public JsonResult Get(int id)
         {
             return Json(context.Users.First(user => user.id == id));
         }
    }
}
