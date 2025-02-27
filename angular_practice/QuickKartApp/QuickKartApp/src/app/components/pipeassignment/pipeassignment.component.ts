import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { OrdinalPipe } from '../../custom-pipes/ordinal.pipe';
import { AgeinPipe } from '../../custom-pipes/agein.pipe';
import { SalutationPipe } from '../../custom-pipes/salutation.pipe';
import { SearchemployeePipe } from '../../custom-pipes/searchemployee.pipe';
import { RomanpipePipe } from '../../custom-pipes/romanpipe.pipe';

@Component({
  selector: 'app-pipeassignment',
  imports: [CommonModule,
    FormsModule,
    OrdinalPipe,
    AgeinPipe,
    SalutationPipe,
    SearchemployeePipe,
    RomanpipePipe
    
  ],
  templateUrl: './pipeassignment.component.html',
  styleUrl: './pipeassignment.component.css'
})
export class PipeassignmentComponent {
  input:any;
  DOB :any = new Date();
   employee:any = [
   { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
  { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
  { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
  { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
  { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" } ];
  searchText :any;
  num: any;
}
