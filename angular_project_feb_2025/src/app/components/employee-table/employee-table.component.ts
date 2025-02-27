import { Component, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs: ['employees'],
  outputs: ['deleteEmployeeEvent']
})
export class EmployeeTableComponent implements OnChanges {
  employees: any;
  deleteEmployeeEvent = new EventEmitter()
  deleteEmp(index: any) {
    this.deleteEmployeeEvent.emit(index);
  }
  ngOnChanges(myChanges: any) { // ngOnChanges is from OnChanges Interface
    console.log('EmployeeTableComponent::', myChanges);
  }
  ngDoCheck() { 
    console.log('ngDoCheck from EmployeeTableComponent::');
  }
}
