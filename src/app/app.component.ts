import { Component } from '@angular/core';
import { UserlistComponent } from './Components/userlist/userlist.component';
import { DatabindingComponent } from './Components/databinding/databinding.component';
import { ProductlistComponent } from './Components/productlist/productlist.component';
import { OrdinalPipe } from './pipes/ordinalpipe.pipe';
import { PipesComponent } from "./pipes/pipes.component";
import { EmployeeCrudComponent } from './Components/employee-crud/employee-crud.component';
import { StarRatingComponent } from './Components/star-rating/star-rating.component';

@Component({
  selector: 'app-root',
  imports: [
    // UserlistComponent,
    // DatabindingComponent,
    // PipesComponent
    // EmployeeCrudComponent
    StarRatingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Practice';
  userRating: number = 3;
}
