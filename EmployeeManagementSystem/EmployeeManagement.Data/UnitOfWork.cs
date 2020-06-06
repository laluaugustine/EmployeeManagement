using EmployeeManagement.Data;
using EmployeeManagement.Model;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

public class UnitOfWork : IUnitOfWork
{

    private EmployeeDbContext _dbContext;
    private BaseRepository<Employee> _employees;


    public UnitOfWork(EmployeeDbContext dbContext)
    {
        _dbContext = dbContext;
    }

    public IRepository<Employee> Employees
    {
        get
        {
            return _employees ??
                (_employees = new BaseRepository<Employee>(_dbContext));
        }
    }

    public void Commit()
    {
        _dbContext.SaveChanges();
    }
}