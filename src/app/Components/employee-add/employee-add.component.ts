import { Component, output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector:'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs:['addEvent']
})
export class EmployeeAddComponent {
  newEmployee = { eId: 0, name: '', sal: 0, gender: '' };

  addEvent = new EventEmitter();
  addEmployee() {
    this.addEvent.emit(this.newEmployee)
  }
}
