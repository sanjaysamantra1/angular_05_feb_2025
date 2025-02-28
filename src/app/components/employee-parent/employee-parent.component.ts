import { Component } from '@angular/core';
import { EmployeeTableComponent } from "../employee-table/employee-table.component";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { EmployeeFormComponent } from "../employee-form/employee-form.component";

@Component({
  selector: 'app-employee-parent',
  imports: [EmployeeTableComponent, CommonModule, FormsModule, EmployeeFormComponent],
  templateUrl: './employee-parent.component.html',
  styleUrl: './employee-parent.component.css'
})
export class EmployeeParentComponent {

  employees = [
    { id: 1, name: 'John Doe', department: 'IT', salary: 60000, email: 'john.doe@example.com', joiningDate: '2020-01-15' },
    { id: 2, name: 'Jane Smith', department: 'HR', salary: 55000, email: 'jane.smith@example.com', joiningDate: '2019-03-22' },
    { id: 3, name: 'Mike Johnson', department: 'Finance', salary: 70000, email: 'mike.johnson@example.com', joiningDate: '2021-07-10' },
    { id: 4, name: 'Emily Brown', department: 'Marketing', salary: 52000, email: 'emily.brown@example.com', joiningDate: '2018-11-05' },
    { id: 5, name: 'David Wilson', department: 'IT', salary: 65000, email: 'david.wilson@example.com', joiningDate: '2022-06-01' },
  ];
  addEmployee(newEmp: any) {
    this.employees.push(newEmp);
  }

  
 }
