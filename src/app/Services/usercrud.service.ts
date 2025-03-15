import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { response } from 'express';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsercrudService {
  users: any[] = [];
  url = 'http://localhost:3000/users';
  constructor(private httpClient: HttpClient) {
  }
  getUsers() {
    return this.httpClient.get(this.url).subscribe((response: any) => {
      this.users = response;
    });
  }
  addUsers(user: any) {
    this.httpClient.post(this.url, user).subscribe((newUser) => {
      this.users.push(newUser);
    });
  }
 
  deleteUser(userId: number) {
    this.httpClient.delete(`${this.url}/${userId}`).subscribe(() => {
      this.users = this.users.filter(user => user.id !== userId);
    });
  }
  updateUsers(user: any) {
    this.httpClient.put(`${this.url}/${user.id}`, user);
  }
}
