import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

declare var bootstrap: any;

@Component({
  selector: 'app-employee-crud',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrls: ['./employee-crud.component.css']
})
export class EmployeeCRUDComponent implements AfterViewInit {
  @ViewChild('employeeModal') employeeModal!: ElementRef;
  
  showAddEmployeeForm: boolean = false;

  // Object to bind new employee form inputs
  newEmployee = {
    name: '',
    department: '',
    salary: 0,
    email: '',
    joiningDate: ''
  };

  employees: any[] = [
    { id: 1, name: 'John Doe', department: 'IT', salary: 60000, email: 'john.doe@example.com', joiningDate: '2020-01-15' },
    { id: 2, name: 'Jane Smith', department: 'HR', salary: 55000, email: 'jane.smith@example.com', joiningDate: '2019-03-22' },
    { id: 3, name: 'Mike Johnson', department: 'Finance', salary: 70000, email: 'mike.johnson@example.com', joiningDate: '2021-07-10' },
    { id: 4, name: 'Emily Brown', department: 'Marketing', salary: 52000, email: 'emily.brown@example.com', joiningDate: '2018-11-05' },
    { id: 5, name: 'David Wilson', department: 'IT', salary: 65000, email: 'david.wilson@example.com', joiningDate: '2022-06-01' },
  ];

  selectedEmployee: any = null;
  modalInstance: any;

  ngAfterViewInit() {
    if (this.employeeModal) {
      this.modalInstance = new bootstrap.Modal(this.employeeModal.nativeElement);
    }
  }

  openModal(employee: any) {
    this.selectedEmployee = employee;
    if (this.modalInstance) {
      this.modalInstance.show();
    }
  }

  deleteEmployee(employee: any) {
    const confirmation = window.confirm(`Are you sure you want to delete ${employee.name}?`);
    if (confirmation) {
      this.employees = this.employees.filter(emp => emp.id !== employee.id);
    }
  }

  trackById(index: number, item: any): number {
    return item.id;
  }

  toggleAddEmployeeForm() {
    this.showAddEmployeeForm = !this.showAddEmployeeForm;
  }

  addEmployee() {
    // Assign a new unique ID by finding the current maximum and adding one.
    const newId = this.employees.length > 0 ? Math.max(...this.employees.map(e => e.id)) + 1 : 1;
    const employeeToAdd = { id: newId, ...this.newEmployee };

    // Insert the new employee record into the array
    this.employees.push(employeeToAdd);

    // Display SweetAlert success message
    Swal.fire({
      title: 'Success',
      text: 'Added Successfully',
      icon: 'success',
      timer: 2000,
      showConfirmButton: false,
    });

    // Reset the new employee form object
    this.newEmployee = { name: '', department: '', salary: 0, email: '', joiningDate: '' };

    // Optionally hide the form after submission
    this.showAddEmployeeForm = false;
  }
}
