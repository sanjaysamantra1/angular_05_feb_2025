import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  salary: number;
  projects: { name: string; duration: string }[]; // Example of additional data
}

@Component({
  selector: 'app-employee-crud',
  imports: [],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css',
})
export class EmployeeCRUDComponent {
  employees: Employee[] = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      department: 'HR',
      salary: 50000,
      projects: [
        { name: 'Recruitment Portal', duration: '6 months' },
        { name: 'Employee Training', duration: '3 months' },
      ],
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      department: 'Finance',
      salary: 60000,
      projects: [
        { name: 'Budget Management', duration: '1 year' },
        { name: 'Tax Calculations', duration: '4 months' },
      ],
    },
  ];

  selectedEmployee: Employee | null = null;

  // Open Modal with Employee Details
  viewEmployee(employee: Employee) {
    this.selectedEmployee = employee;
  }
}
