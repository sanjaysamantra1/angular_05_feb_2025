import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { CategoriesComponent } from "./components/categories/categories.component";
import { FooterComponent } from "./components/footer/footer.component";
import { BodyComponent } from "./components/body/body.component";
import { CarouselComponent } from "./components/carousel/carousel.component";
import { DatabindingComponent } from "./components/databinding/databinding.component";
import { ModalComponent } from "./components/modal/modal.component";
import { EmployeeCRUDComponent } from "./components/employee-crud/employee-crud.component";
import { PipesComponent } from "./components/pipes/pipes.component";
// import { DirectivesComponent } from "./components/directives/directives.component";
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { EmployeeParentComponent } from './components/employee-parent/employee-parent.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';
import { StarRatingComponent } from "./components/star-rating/star-rating.component";
import { EmployeesComponent } from "./components/employees/employees.component";
import { HttpdemoComponent } from "./components/httpdemo/httpdemo.component";
import { UserCrudComponent } from "./components/user-crud/user-crud.component";
import { FormTemplateComponent } from "./components/form-template/form-template.component";
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
@Component({
  selector: 'app-root',
  standalone:true,
  imports: [NavbarComponent, CategoriesComponent, FooterComponent, BodyComponent, CarouselComponent,
    DatabindingComponent, ModalComponent, EmployeeCRUDComponent, PipesComponent, EmployeeTableComponent, EmployeeParentComponent, EmployeeFormComponent, StarRatingComponent, EmployeesComponent, HttpdemoComponent, UserCrudComponent, FormTemplateComponent, RouterModule,UsersComponent,UserdetailsComponent,ProductsComponent,ProductdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Nishith';
}
