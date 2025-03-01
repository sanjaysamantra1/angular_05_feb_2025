import { Component } from '@angular/core';
import { DatabindingComponent } from '../databinding/databinding.component';
import { DirectivesComponent } from '../directives/directives.component';
import { ProductsComponent } from '../products/products.component';
import { ProductComponent } from '../product/product.component';
import { PipesComponent } from '../pipes/pipes.component';
import { PipeassignmentComponent } from '../pipeassignment/pipeassignment.component';
import { EmployeeCRUDComponent } from '../employee-crud/employee-crud.component';
import { StarRatingComponent } from '../star-rating/star-rating.component';
import { EmployeeSComponent } from '../employee-s/employee-s.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent, DirectivesComponent,
    // ProductsComponent,
    // ProductComponent
    //PipesComponent
    //PipeassignmentComponent
   // EmployeeCRUDComponent,
   // StarRatingComponent
    EmployeeSComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  
}
