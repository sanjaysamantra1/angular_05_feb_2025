import { HttpClient } from '@angular/common/http';
import { Component, effect, signal } from '@angular/core';

@Component({
  selector: 'app-signal-demo2',
  imports: [],
  templateUrl: './signal-demo2.component.html',
  styleUrl: './signal-demo2.component.css'
})
export class SignalDemo2Component {
  userId = signal(1);
  userData: any;

  constructor(private httpClient: HttpClient) {
  }
  userDetailsEffect = effect(() => {
    const id = this.userId();
    this.fetchUserDetails(id);
  });
  destroyEffect() {
    this.userDetailsEffect.destroy()
  }
  fetchUserDetails(id: number) {
    this.httpClient.get(`https://jsonplaceholder.typicode.com/users/${id}`).subscribe(response => {
      this.userData = response;
    })
  }
  incrementUserId() {
    this.userId.update(val => val + 1);
  }

}
