import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { UserslistComponent } from './components/userslist/userslist.component';

export const routes: Routes = [  
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    { path: 'careers', component: CareerComponent },
    { path: 'employees', component: EmployeeComponent },
    { path: 'products', component: ProductListComponent },
    { path: 'users', component: UserslistComponent },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
];

  
