import { Component, Input ,Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-employee-table',
  imports: [],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs:['employees']
})
export class EmployeeTableComponent {
employees:any;

  deleteEmployee(index: number) {
    this.employees.splice(index, 1);
  }
}
