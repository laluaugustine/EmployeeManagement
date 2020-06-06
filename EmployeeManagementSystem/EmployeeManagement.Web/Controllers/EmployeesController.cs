using EmployeeManagement.Model;
using System.Net;
using System.Web.Mvc;
using System.Web.Script.Serialization;

namespace EmployeeManagementSystem.Controllers
{
    public class EmployeesController : Controller
    {
        private readonly IUnitOfWork unitOfWork;
        public EmployeesController(IUnitOfWork unitOfWork)
        {
            this.unitOfWork = unitOfWork;
        }

        // GET: Employees
        public ActionResult Index()
        {
            //return View(unitOfWork.Employees.Get());
            return View();
        }
        public JsonResult ListEmployees()
        {
            return Json(unitOfWork.Employees.Get(), JsonRequestBehavior.AllowGet);
        }


        // GET: Employees/Create
        public ActionResult Create()
        {
            return View();
        }

        // POST: Employees/Create
        [HttpPost]
        public ActionResult Create( Employee employee)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.Employees.Insert(employee);
                unitOfWork.Commit();
                return View(employee);
            }

            return View(employee);
        }

        // GET: Employees/Edit/5
        public ActionResult Edit(int? id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            Employee employee = unitOfWork.Employees.GetByID(id);
            if (employee == null)
            {
                return HttpNotFound();
            }
            var serializer = new JavaScriptSerializer();
            ViewBag.SelectedEmployee = serializer.Serialize(employee);
            return View();
        }

        // POST: Employees/Edit/5
        [HttpPost]
        public ActionResult Update( Employee employee)
        {
            if (ModelState.IsValid)
            {
                unitOfWork.Employees.Update(employee);
                unitOfWork.Commit();
                return RedirectToAction("Index");
            }
            return View(employee);
        }

    }
}
