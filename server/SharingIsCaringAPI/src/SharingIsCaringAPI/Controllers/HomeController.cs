using Microsoft.AspNetCore.Mvc;

namespace SharingIsCaringAPI.Controllers
{
    public class HomeController : Controller
    {
        public JsonResult Index()
        {
            return Json("Sharing Is Caring API");
        }
    }
}
