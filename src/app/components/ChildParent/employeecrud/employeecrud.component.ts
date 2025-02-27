import { Component } from '@angular/core';
import { EmployeeTableComponent } from '../employeetable/employeetable.component';
import { EmployeeAddComponent } from '../employeeadd/employeeadd.component';
import { CommonModule } from '@angular/common';
// import { EmployeeaddComponent } from "../employeeadd/employeeadd.component";
// import { EmployeetableComponent } from "../employeetable/employeetable.component";

@Component({
  selector: 'app-employeecrud',
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css'],
  imports: [EmployeeTableComponent, EmployeeAddComponent,CommonModule
  ]
})
export class EmployeeCrudComponent {
  employees = [
    { eId: 101, name: 'Ramana Gattamaneni', sal: 15000, gender: 'male'},
    { eId: 102, name: 'Akshitha', sal: 8000, gender: 'female'},
    { eId: 103, name: 'Deepthi', sal: 7000, gender: 'female'},
    { eId: 104, name: 'Nandhini', sal: 9000, gender: 'female'},
    { eId: 105, name: 'Jyotshna', sal: 8000, gender: 'female'}
  ];


  addEmployee(newEmployee: any) {
    this.employees.push(newEmployee);
  }

}
