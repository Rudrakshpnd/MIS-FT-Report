using Microsoft.AspNetCore.Mvc;

namespace MIS_FT_Report.Controllers
{
    public class DepartmentController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
