import { Component, inject } from '@angular/core';
import { EmployeeServiceService } from '../../services/employee-service.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-s',
  imports: [FormsModule],
  templateUrl: './employee-s.component.html',
  styleUrl: './employee-s.component.css'
})
export class EmployeeSComponent  {
  employeeService;
  selectCriiteria: string ="All"
  
  employees :any; // Initialize employees as an empty array
  constructor(){
  this.employeeService = inject(EmployeeServiceService);
   
  }

  ngOnInit(): void {
    // Fetch the employee data from the service
    this.employees = this.employeeService.allEmployees();
  }

  getAllEmployees(){
    this.employees = this.employeeService.allEmployees();
  }

  getMaleEmployees(){
    this.employees = this.employeeService.maleEmployees();
  }

  getFeMaleEmployees() {
    this.employees = this.employeeService.femaleEmployees();
  }

  onDropdownSelect(select : string){
    this.selectCriiteria=select;
    if (select ==='male'){
      this.getMaleEmployees();
    }
    else if (select ==='female'){
      this.getFeMaleEmployees();
    }
    else{
      this.getAllEmployees();

    }



  }



}

