import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from "./ordinalpipe.pipe";
import { CommonModule } from '@angular/common';
import { RomanpipePipe } from './romanpipe.pipe';
import { AgePipe } from './age.pipe';
import { SalutationPipe } from './salutation.pipe';
import { FilterPipe } from './filter-data.pipe';

@Component({
  selector: 'app-pipes',
  imports: [FormsModule,
    CommonModule, OrdinalPipe,
    RomanpipePipe,
    AgePipe,
    SalutationPipe,
    FilterPipe],

  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  userInput: any;
  numberValue: any;
  birthDate: any;
  
searchTerm: string = '';
employees2 = [{ "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 102, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 104, "name": "akshitha", "sal": 9000, "gender": "female" },
    { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }];

SalutationPipe: any;
  
arremployees = [{ "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
  { "eId": 102, "name": "geeta", "sal": 8000, "gender": "female" },
  { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
  { "eId": 104, "name": "sita", "sal": 9000, "gender": "female" },
  { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }];


}