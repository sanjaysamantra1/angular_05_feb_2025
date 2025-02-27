import { Component, DoCheck, EventEmitter, OnChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-add',
  imports: [FormsModule],
  templateUrl: './employee-add.component.html',
  styleUrl: './employee-add.component.css',
  outputs: ['addEmployeeEvent']
})
export class EmployeeAddComponent implements OnChanges,DoCheck {
  addEmployeeEvent = new EventEmitter()
  employee: any = {
    eId: '',
    name: '',
    sal: '',
    gender: ''
  };
  addEmployee() {
    this.addEmployeeEvent.emit(this.employee);
  }
  ngOnChanges(myChanges: any) { // ngOnChanges is from OnChanges Interface
    console.log('EmployeeAddComponent::', myChanges)
  }
  ngDoCheck() { 
    console.log('ngDoCheck from EmployeeAddComponent::')
  }
}
