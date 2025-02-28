import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmployeeCRUDComponent } from './Components/employee-crud/employee-crud.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';




import { PipeAssignmentComponent } from './Components/pipe-assignment/pipe-assignment.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, EmployeeCRUDComponent,
    FormsModule, PipeAssignmentComponent, 
     
    ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular1';
}
