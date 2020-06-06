using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using EmployeeManagement.Model;

namespace EmployeeManagement.Data
{
    public class EmployeeDbContext:DbContext
    {
        public EmployeeDbContext():base("EmployeeDbContext")
        {

        }
        public DbSet<Employee> Employees { get; set; }
    }
}
