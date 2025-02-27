import { Component } from '@angular/core';
import { EmployeeAddFormComponent } from '../employee-add-form/employee-add-form.component';
import { EmployeetableComponent } from '../employeetable/employeetable.component';

@Component({
  selector: 'app-employee-crud',
  imports: [EmployeeAddFormComponent,
    EmployeetableComponent
  ],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];

  AddNewEmployeeForm(newemployeefromform:any){
   
    this.employees.push(newemployeefromform)

  }

}
