import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  age: number = 20;
  dayNumber: number = new Date().getDay();

  flag: boolean = true;

  stateNames: string[] = ['Alabama', 'Alaska', 'American Samoa', 'Arizona',
    'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware', 'District of Columbia'];

  employees: any = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
  ];
}
