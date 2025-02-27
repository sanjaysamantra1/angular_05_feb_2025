import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css'],
  inputs:['employees']
})
export class EmployeeTableComponent {
  employees:any;
  ngOnChanges(mychange:any){
    console.log(mychange)
  }

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  
      
  }
}
