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
import { Demo2Component } from '../demo2/demo2.component';
import { Math1Component } from '../math1/math1.component';
import { Math2Component } from '../math2/math2.component';
import { HttpDemo1Component } from '../http-demo1/http-demo1.component';
import { HttpDemo2Component } from '../http-demo2/http-demo2.component';
import { ObservableDemo1Component } from '../observable-demo1/observable-demo1.component';
import { ObservableDemo2Component } from '../observable-demo2/observable-demo2.component';
import { ObservableDemo3Component } from '../observable-demo3/observable-demo3.component';
import { ObservableDemo4Component } from '../observable-demo4/observable-demo4.component';
import { SubjectDemo1Component } from '../subject-demo1/subject-demo1.component';
import { TodoListComponent } from '../todo-list/todo-list.component';
import { TodoCardsComponent } from '../todo-cards/todo-cards.component';
import { TodoAddComponent } from '../todo-add/todo-add.component';

@Component({
  selector: 'app-body',
  imports: [
    // DatabindingComponent
    // DirectivesComponent,
    // UsersComponent,
    // EmployeeListComponent,
    // MyModalComponent,
    // ProductsComponent,
    // Demo1Component,
    // Demo2Component
    // PipesComponent
    // ParentComponent,
    // TrafficLightComponent,
    // EmployeeCrudComponent
    // Math1Component,
    // Math2Component,
    // HttpDemo1Component,
    // HttpDemo2Component
    // ObservableDemo1Component,
    // ObservableDemo2Component
    // ObservableDemo3Component
    // ObservableDemo4Component
    // SubjectDemo1Component
    TodoListComponent,
    TodoCardsComponent,
    TodoAddComponent
  ],
  templateUrl: './body.component.html',
  styleUrl: './body.component.css'
})
export class BodyComponent {
  flag: boolean = true;
}
