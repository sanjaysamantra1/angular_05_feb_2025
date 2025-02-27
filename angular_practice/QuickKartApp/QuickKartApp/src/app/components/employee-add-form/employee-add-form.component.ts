import { CommonModule } from '@angular/common';
import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add-form',
  imports: [FormsModule,CommonModule],
  templateUrl: './employee-add-form.component.html',
  styleUrl: './employee-add-form.component.css',
  outputs: ['addEvent']
})
export class EmployeeAddFormComponent {

  // eid:any;
  // ename:any;
  // esalary:any;
  // egender:any;

  

  emplo = { eId: "", name: "", sal: "", gender: "" }; 
  

  addEvent = new EventEmitter();
  addEmployee(){
    this.addEvent.emit(this.emplo);
  }


}
