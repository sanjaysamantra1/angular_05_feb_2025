import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { OrdinalPipe } from '../../pipes/ordinal.pipe';
import { RomanPipe } from '../../pipes/roman.pipe';
import { AgePipe } from '../../pipes/age.pipe';
import { SalutationPipe } from '../../pipes/salutation.pipe';
import { EmployeeFilterPipe } from '../../pipes/employee-filter.pipe';
@Component({
  selector: 'app-pipe-assignment',
  imports: [
    FormsModule,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    EmployeeFilterPipe,
    CommonModule
  ],
  templateUrl: './pipe-assignment.component.html',
  styleUrl: './pipe-assignment.component.css',
})
export class PipeAssignmentComponent {
  ordinalInput!: number;
  romanInput!: number;
  birthDateInput!: string;

  // Employee Data for Salutation & Filtering
  employees = [
    { name: 'John Doe', gender: 'M', department: 'IT' },
    { name: 'Jane Smith', gender: 'F', department: 'HR' },
    { name: 'Mike Johnson', gender: 'M', department: 'Finance' },
  ];

  searchText = '';
}
