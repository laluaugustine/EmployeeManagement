using EmployeeManagement.Model;
using System;
using System.Collections.Generic;

public interface IUnitOfWork
{
    IRepository<Employee> Employees { get; }
    void Commit();
}