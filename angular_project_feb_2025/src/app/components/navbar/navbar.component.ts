import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { UserroleService } from '../../services/userrole.service';

@Component({
  selector: 'app-navbar',
  imports: [
    RouterLink,
    RouterLinkActive
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  userRole: string = '';

  constructor(private userroleService: UserroleService) {
  }
  ngOnInit() {
    this.userRole = this.userroleService.getUserRole(); // patient
  }
}
