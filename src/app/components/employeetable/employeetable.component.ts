import { Component } from '@angular/core';

@Component({
  selector: 'app-employeetable',
  imports: [],
  templateUrl: './employeetable.component.html',
  styleUrls: ['./employeetable.component.css'],
  inputs:['employees']

})
export class EmployeetableComponent {
  employees: any;


  deleteEmployee(index:number){
  this.employees.splice(index,1)
  }

}
