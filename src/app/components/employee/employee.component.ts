import { Component} from '@angular/core';
import { EmployeeService } from '../../Services/employee.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee',
  imports: [FormsModule],
  templateUrl: './employee.component.html',
  styleUrl: './employee.component.css'
})
export class EmployeeComponent {
  employees:any;
  selectedFilter ="allemployees";
  constructor(private emloyeeService: EmployeeService) {
  }
  ngOnInit() {
    this.getFilteredEmployees();
  }
  getFilteredEmployees() {
    if (this.selectedFilter === 'maleEmployees') {
      this.employees = this.emloyeeService.maleEmployees();
    } else if(this.selectedFilter === 'femaleEmployees'){
      this.employees = this.emloyeeService.femaleEmployees();
    }else {
      this.employees = this.emloyeeService.allemployees()
    }
  }

}
