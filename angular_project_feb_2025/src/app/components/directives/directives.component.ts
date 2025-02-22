import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NumberonlyDirective } from '../../directives/numberonly.directive';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-directives',
  imports: [
    CommonModule,
    FormsModule,
    NumberonlyDirective,
    HighlightDirective
  ],
  templateUrl: './directives.component.html',
  styleUrl: './directives.component.css'
})
export class DirectivesComponent {
  num: number = 5;

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

  myStyle1 = {
    "color": "green",
    "border": "10px dotted red",
    "padding": "10px"
  }
  myStyle2 = {
    "color": "blue",
    "border": "10px dashed orange",
    "padding": "5px"
  }

  myFunction() {
    if (this.num % 2 == 0) {
      return this.myStyle1
    } else {
      return this.myStyle2
    }
  }
}
