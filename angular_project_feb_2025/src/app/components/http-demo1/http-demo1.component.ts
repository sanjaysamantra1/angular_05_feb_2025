import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-http-demo1',
  imports: [],
  templateUrl: './http-demo1.component.html',
  styleUrl: './http-demo1.component.css'
})
export class HttpDemo1Component {
  users: any;

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    this.fetchUsers();
  }
  fetchUsers() {
    const user_url = 'https://jsonplaceholder.typicode.com/users';
    this.httpClient.get(user_url).subscribe(response => {
      this.users = response;
    });
  }
}
