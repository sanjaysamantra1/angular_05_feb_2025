import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { UsersComponent } from '../users/users.component';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { MyModalComponent } from '../my-modal/my-modal.component';
import { ProductsComponent } from '../products/products.component';
import { Demo1Component } from '../demo1/demo1.component';
import { PipesComponent } from '../pipes/pipes.component';
import { ParentComponent } from '../parent/parent.component';
import { EmployeeCrudComponent } from '../employee-crud/employee-crud.component';
import { TrafficLightComponent } from '../traffic-light/traffic-light.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent
    // DirectivesComponent,
    // UsersComponent,
    // EmployeeListComponent,
    // MyModalComponent,
    // ProductsComponent,
    // Demo1Component
    // PipesComponent
    ParentComponent,
    TrafficLightComponent,
    // EmployeeCrudComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {

}
