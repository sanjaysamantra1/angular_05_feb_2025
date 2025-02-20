import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent
    // DirectivesComponent,
    UsersComponent,
    // EmployeeListComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
