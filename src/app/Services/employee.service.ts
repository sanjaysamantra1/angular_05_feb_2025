import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employees = [
    { eId: 101, name: 'Ramana Gattamaneni', sal: 15000, gender: 'male' },
    { eId: 102, name: 'Akshitha', sal: 8000, gender: 'female' },
    { eId: 103, name: 'Deepthi', sal: 7000, gender: 'female' },
    { eId: 104, name: 'Nandhini', sal: 9000, gender: 'female' },
    { eId: 105, name: 'Jyotshna', sal: 8000, gender: 'female' }
  ];

  allemployees() {
    return this.employees;
  }
  maleEmployees() {
    return this.employees.filter(emp => emp.gender === 'male');
  }
  femaleEmployees() {
    return this.employees.filter(emp => emp.gender === 'female');
  }
}
