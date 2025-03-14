import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Demo3Component } from '../demo3/demo3.component';

@Component({
  selector: 'app-aboutus',
  imports: [
    RouterLink,
    Demo3Component
  ],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {
  constructor(private routerObj: Router) { }

  doSomethingAndGoToHome() {
    console.log('Do Something...');
    this.routerObj.navigate(['/home']);
  }
}
