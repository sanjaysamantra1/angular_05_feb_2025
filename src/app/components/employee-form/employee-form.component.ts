import { Component,EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employee-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-form.component.html',
  styleUrl: './employee-form.component.css',
  outputs:['employeeAdded']
})
export class EmployeeFormComponent {
   employeeAdded = new EventEmitter<any>();
  newEmployee = {
    id: '',
    name: '',
    department: '',
    salary: null,
    email: '',
    joiningDate: ''
  };

  addEmployee() {
    if (this.newEmployee.name && this.newEmployee.department && this.newEmployee.salary) {
      this.employeeAdded.emit({ ...this.newEmployee });
      this.newEmployee = { id: '', name: '', department: '', salary: null, email: '', joiningDate: '' };
    } else {
      alert('Please fill all required fields.');
    }
  }

}
