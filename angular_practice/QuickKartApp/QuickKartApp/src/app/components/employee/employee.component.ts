import { Component } from '@angular/core';
import employee from './employee_data';

@Component({
  selector: 'app-employee',
  imports: [],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employeedata = employee;

}
