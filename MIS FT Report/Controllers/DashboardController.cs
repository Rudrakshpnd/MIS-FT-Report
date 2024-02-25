using Microsoft.AspNetCore.Mvc;

namespace MIS_FT_Report.Controllers
{
    public class DashboardController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
