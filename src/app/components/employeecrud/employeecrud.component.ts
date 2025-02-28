import { Component } from '@angular/core';
import { EmployeetableComponent } from '../employeetable/employeetable.component';
import { EmployeeAddComponent } from '../employee-add/employee-add.component';


@Component({
  selector: 'app-employeecrud',
  imports: [EmployeetableComponent,
    EmployeeAddComponent
  ],
  templateUrl: './employeecrud.component.html',
  styleUrls: ['./employeecrud.component.css'],
})
export class EmployeecrudComponent {
  employees=[
    { eId: 1, name: 'John Doe', salary: 50000, department: 'IT', position: 'Software Engineer', experience: 3 },
    { eId: 2, name: 'Jane Smith', salary: 60000, department: 'HR', position: 'HR Manager', experience: 5 },
    { eId: 3, name: 'Alice Johnson', salary: 55000, department: 'Finance', position: 'Financial Analyst', experience: 4 },
    { eId: 4, name: 'Bob Williams', salary: 70000, department: 'Marketing', position: 'Marketing Manager', experience: 6 },
    { eId: 5, name: 'Charlie Brown', salary: 65000, department: 'Sales', position: 'Sales Executive', experience: 4 }
];

addEmployee(newEmployee:any){
  this.employees.push(newEmployee);
}

getEmployeejson(){
  return JSON.stringify(this.employees, null ,2);
}


}
