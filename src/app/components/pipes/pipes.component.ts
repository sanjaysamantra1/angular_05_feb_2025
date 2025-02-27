import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from './ordinal.pipe';
import { RomanPipe } from './roman.pipe';
import { AgePipe } from './age.pipe';
import { FilterPipe } from './filter.pipe';
import { SalutationPipe } from './salutation.pipe';

@Component({
  selector: 'app-pipes',
  imports: [FormsModule,
    OrdinalPipe,
    RomanPipe,
    AgePipe,
    SalutationPipe,
    FilterPipe

  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {

  userNumber: any;
  selectedDate: any;

  searchTerm: string = '';

  arremployees = [{ "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 102, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 104, "name": "sita", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }];

  employees = [{ "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
  { "eId": 102, "name": "geeta", "sal": 8000, "gender": "female" },
  { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
  { "eId": 104, "name": "sita", "sal": 9000, "gender": "female" },
  { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }];
}
