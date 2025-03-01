import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {
  constructor() { }

  employees: any[] = [
    { id: 1, name: 'John Doe',gender:'Male', department: 'IT', salary: 60000, email: 'john.doe@example.com', joiningDate: '2020-01-15' },
    { id: 2, name: 'Jammy Smith',gender:'Female', department: 'HR', salary: 55000, email: 'jane.smith@example.com', joiningDate: '2019-03-22' },
    { id: 3, name: 'Mike Johnson', gender:'Male',department: 'Finance', salary: 70000, email: 'mike.johnson@example.com', joiningDate: '2021-07-10' },
    { id: 4, name: 'Emily Brown',gender:'Female', department: 'Marketing', salary: 52000, email: 'emily.brown@example.com', joiningDate: '2018-11-05' },
    { id: 5, name: 'David Wilson',gender:'Male', department: 'IT', salary: 65000, email: 'david.wilson@example.com', joiningDate: '2022-06-01' },
  ];

  getEmployees() {
    return this.employees;
  }
  getMaleEmployees(){
    return this.employees.filter(employee => employee.gender === 'Male');
  }
  getFemaleEmployees(){
  return this.employees.filter( employee => employee.gender === 'Female');
  }
  deleteEmployee(id: number) {
    this.employees = this.employees.filter(emp => emp.id !== id);
  }
}
