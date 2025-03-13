import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserroleService {
  userRole: string = 'doctor'; // this value we will get after login

  constructor() { }

  getUserRole() {
    return this.userRole;
  }
}
