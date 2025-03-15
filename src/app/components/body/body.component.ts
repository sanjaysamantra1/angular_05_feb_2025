import { Component } from '@angular/core';
import { DataBindingComponent } from "../data-binding/data-binding.component";
import { UserslistComponent } from "../userslist/userslist.component";
import { ProductListComponent } from '../product-list/product-list.component';
import { EmployeeCRUDComponent } from "../employee-crud/employee-crud.component";
import { PipesComponent } from "../pipes/pipes.component";
import { EmployeeCrudComponent } from '../ChildParent/employeecrud/employeecrud.component';
import { FormsModule } from '@angular/forms';
import { StarComponent } from "../star/star.component";
import { EmployeeComponent } from "../employee/employee.component";
import { UserCrudApplicationComponent } from "../user-crud-application/user-crud-application.component"; // Import FormsModule
import { CartsComponent } from '../carts/carts.component';
import { FormsComponent } from '../forms/forms.component';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-body',
  imports: [
    // DataBindingComponent,
    // UserslistComponent
    // ProductListComponent,
    // EmployeeCRUDComponent,
    // UserslistComponent,
    // ProductListComponent,
    // PipesComponent,
    // EmployeeCrudComponent,
    // FormsModule,
    // StarComponent,
    // DataBindingComponent,
    // EmployeeComponent,
    // UserCrudApplicationComponent,
    // CartsComponent,
    // FormsComponent
    RouterOutlet
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {



}
