import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeParentComponent } from '../employee-parent/employee-parent.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-employee-table',
  imports: [CommonModule,FormsModule],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.css',
  inputs:['employees']
})
export class EmployeeTableComponent {
 employees:any=[];

  deleteEmployee(employee: any) {
    const confirmation = window.confirm(`Are you sure you want to delete ${employee.name}?`);
    if (confirmation) {
      this.employees = this.employees.filter((emp: { id: any; }) => emp.id !== employee.id);
    }
  }
}
