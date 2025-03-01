import { Component,OnInit } from '@angular/core';
import { EmployeeServiceService } from '../../employee-service.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-employees',
  imports: [CommonModule,FormsModule],
  templateUrl: './employees.component.html',
  styleUrl: './employees.component.css'
})
export class EmployeesComponent implements OnInit{
  maleEmployees:any[]=[];
  femaleEmployees:any[]=[];
  allEmployees: any[] = [];
  displayedEmployees: any[] = [];
  selectedCategory: string = 'all';

  constructor(private EmployeeServiceService:EmployeeServiceService){
    
  }
  ngOnInit(): void {
    this.loadEmployees();
  }

  loadEmployees() {
    this.allEmployees = this.EmployeeServiceService.getEmployees();
    this.maleEmployees=this.EmployeeServiceService.getMaleEmployees();
    this.femaleEmployees=this.EmployeeServiceService.getFemaleEmployees();
    this.updateDisplayedEmployees();
  }

  updateDisplayedEmployees() {
   if(this.selectedCategory==='male'){
    this.displayedEmployees=this.EmployeeServiceService.getMaleEmployees();
   }
   else if(this.selectedCategory==='female'){
    this.displayedEmployees=this.EmployeeServiceService.getFemaleEmployees();
   }
   else if(this.selectedCategory==='all'){
    this.displayedEmployees=this.allEmployees;
   }
    else if (this.selectedCategory === 'IT'){
      
      this.displayedEmployees = this.allEmployees.filter(employee => employee.department === 'IT');
    }
    else if (this.selectedCategory === 'HR'){
      
      this.displayedEmployees = this.allEmployees.filter(employee => employee.department === 'HR');
    }
    else if (this.selectedCategory === 'Marketing'){
      this.displayedEmployees = this.allEmployees.filter(employee => employee.department === 'Marketing');
    }
    else if (this.selectedCategory === 'Finance'){
      this.displayedEmployees = this.allEmployees.filter(employee => employee.department === 'Marketing');
    }
  }

  deleteEmployee(id: number) {
    this.EmployeeServiceService.deleteEmployee(id);
    this.loadEmployees(); 
  }

}
