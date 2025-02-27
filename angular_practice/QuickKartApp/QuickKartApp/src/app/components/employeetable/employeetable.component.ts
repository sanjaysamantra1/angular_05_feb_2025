import { Component } from '@angular/core';
import employee from '../employee/employee_data';

@Component({
  selector: 'app-employeetable',
  imports: [],
  templateUrl: './employeetable.component.html',
  styleUrl: './employeetable.component.css',
  inputs :['employee']
})
export class EmployeetableComponent {

  employee:any;

  ngOnChanges(changelement:any){
    console.log(changelement);
  }

  handleClick(id:number){

    this.employee.splice(id, 1);

  }
}
