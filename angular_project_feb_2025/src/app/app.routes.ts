import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareersComponent } from './components/careers/careers.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';
import { UserdetailsComponent } from './components/userdetails/userdetails.component';
import { ProductdetailsComponent } from './components/productdetails/productdetails.component';
import { PermanentjobsComponent } from './components/permanentjobs/permanentjobs.component';
import { ContractjobsComponent } from './components/contractjobs/contractjobs.component';
import { AppointmentsComponent } from './components/appointments/appointments.component';
import { doctorGuard } from './guards/doctor.guard';
import { hasChangesGuard } from './guards/has-changes.guard';

export const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'aboutus', component: AboutusComponent },
    {
        path: 'careers',
        component: CareersComponent,
        children: [
            { path: 'permanent', component: PermanentjobsComponent },
            { path: 'contract', component: ContractjobsComponent },
        ]
    },
    {
        path: 'contactus',
        component: ContactusComponent,
        canDeactivate: [hasChangesGuard]
    },
    { path: 'users', component: UsersComponent },
    { path: 'userdetails/:id', component: UserdetailsComponent },
    { 
        path: 'products', 
        loadComponent: () =>
            import('./components/products/products.component').then((x) => x.ProductsComponent)
    },
    { path: 'productdetails', component: ProductdetailsComponent },
    {
        path: 'appointments',
        component: AppointmentsComponent,
        canActivate: [doctorGuard]
    },
    { path: '', component: HomeComponent },
    { path: '**', component: NotfoundComponent },
];
