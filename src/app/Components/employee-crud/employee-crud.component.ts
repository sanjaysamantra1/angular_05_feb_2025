import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../employee-table/employee-table.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeTableComponent,EmployeeAddComponent],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCrudComponent {
  employees = [
    { eId: 101, name: 'Ramana', sal: 5000, gender: 'male'},
    { eId: 102, name: 'Akshitha', sal: 8000, gender: 'female'},
    { eId: 103, name: 'Deepthi', sal: 7000, gender: 'female'},
    { eId: 104, name: 'Nandhini', sal: 9000, gender: 'female'},
    { eId: 105, name: 'Jyotshna', sal: 8000, gender: 'female'}
  ];


  // Method to delete an employee by eId
  deleteEmployee(employeeId: number) {
    this.employees = this.employees.filter(emp => emp.eId !== employeeId);
  }
  addEmployee(newEmployee: any) {
    this.employees.push(newEmployee);
  }


}
