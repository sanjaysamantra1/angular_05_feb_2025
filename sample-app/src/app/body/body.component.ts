import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { EmployeelistComponent } from '../employeelist/employeelist.component';

@Component({
  selector: 'app-body',
  imports: [

EmployeelistComponent

  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
