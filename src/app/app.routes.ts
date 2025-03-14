import { RouterModule, Routes } from '@angular/router';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { CareersComponent } from './components/careers/careers.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { HomeComponent } from './components/home/home.component';
import { MenComponent } from './men/men.component';
import { WomenComponent } from './women/women.component';
import { KidsComponent } from './kids/kids.component';
import { SaleComponent } from './sale/sale.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductsComponent } from './components/products/products.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';


export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'men', component: MenComponent },
    { path: 'women', component: WomenComponent },
    { path: 'kids', component: KidsComponent },
    { path: 'sale', component: SaleComponent },
    { path: 'users', component: UsersComponent },   
    { path:'products',component: ProductsComponent}, 
    { path:'productdetails',component: ProductdetailsComponent}, 
    { path: 'userdetails/:id', component: UserdetailsComponent },    
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
];

