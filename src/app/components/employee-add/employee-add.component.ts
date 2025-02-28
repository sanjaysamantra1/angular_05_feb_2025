import { Component, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrls:[ './employee-add.component.css'],
  outputs:['addEvent']
})
export class EmployeeAddComponent {

  newemployee = {eId: " ", name: " ", salary: " ", department: " ", position: " ", experience: " "}
  addEvent = new EventEmitter();

  addEmployee(){
    this.addEvent.emit(this.newemployee);
  }

}
