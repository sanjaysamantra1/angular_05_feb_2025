import { Component } from '@angular/core';
import { EmployeeService } from '../../services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-http-demo2',
  imports: [FormsModule],
  templateUrl: './http-demo2.component.html',
  styleUrl: './http-demo2.component.css'
})
export class HttpDemo2Component {
  employees: any = [];
  isLoading: boolean = false;
  isAdd = true;
  currentEmp: any;

  constructor(private employeeService: EmployeeService) {
  }

  fetchEmployees() {
    this.isLoading = true;
    this.employeeService.getAllEmployees().subscribe(response => {
      console.log(response)
      this.employees = response;
      this.isLoading = false;
    })
  }

  addNewEmp(firstName: any, lastName: any, email: any, gender: any, sal: any) {
    let newEmp = { firstName, lastName, email, gender, sal };
    this.employeeService.createNewEmployee(newEmp).subscribe(response => {
      alert('Employee Added Successfully!!');
      this.fetchEmployees();
    });
  }

  deleteEmployee(id: string) {
    this.employeeService.deleteEmployee(id).subscribe(response => {
      alert('Employee Deleted Successfully!!');
      this.fetchEmployees();
    });
  }
  editEmployee(emp: any) {
    this.isAdd = false;
    this.currentEmp = emp;
  }

  SaveEditedEmployee(firstName: any, lastName: any, email: any, gender: any, sal: any) {
    let editedEmp = { firstName, lastName, email, gender, sal, id: this.currentEmp.id };
    this.employeeService.updateEmployee(this.currentEmp.id, editedEmp).subscribe(response => {
      this.currentEmp = {};
      alert('Employee Updated Successfully!!');
      this.fetchEmployees();
    });
  }

}
