import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employeeadd',
  templateUrl: './employeeadd.component.html',
  imports:[FormsModule],
  styleUrls: ['./employeeadd.component.css'],
  outputs:['addEvent']
})
export class EmployeeAddComponent {

  newEmployee = { eId:'', name: '', sal: '  ', gender: '' };

  addEvent = new EventEmitter();
  addEmployee() {
    this.addEvent.emit(this.newEmployee)

    
  }
}
