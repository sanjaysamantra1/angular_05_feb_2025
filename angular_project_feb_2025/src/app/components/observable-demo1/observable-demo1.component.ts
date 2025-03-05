import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { observeNotification } from 'rxjs/internal/Notification';

@Component({
  selector: 'app-observable-demo1',
  imports: [],
  templateUrl: './observable-demo1.component.html',
  styleUrl: './observable-demo1.component.css'
})
export class ObservableDemo1Component {
  constructor(private httpClient: HttpClient) {
    // this.normalFunction();
    // this.fetchWithAsyncAwait();
    this.fetchDemo();
    this.httpDemo()
  }
  normalFunction() {
    let res1 = Math.max(10, 20, 30, 40, 50); // 50 value
    console.log(res1);
  }
  fetchDemo() {
    let usersPromise = fetch('https://jsonplaceholder.typicode.com/users'); // return promise
    console.log(usersPromise);
    usersPromise.then(
      (resp) => {
        console.log(resp);
        resp.json().then(
          (finalResponse) => {
            console.log(finalResponse)
          },
          (err) => {
            console.log(err)
          }
        )
      },
      (err) => {
        console.log(err)
      }
    )
  }
  async fetchWithAsyncAwait() {
    try {
      let response = await fetch('https://jsonplaceholder.typicode.com/users');
      let finalResponse = await response.json();
      console.log(finalResponse)
    } catch (err) {
      console.log(err)
    }
  }

  httpDemo() {
    /* this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe(
      (resp) => { console.log(resp) },
      (err) => { console.log(err) },
      () => { console.log('all response received') },
    ) */
    this.httpClient.get('https://jsonplaceholder.typicode.com/users').subscribe({
      next: (response) => {
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('All data Received...')
      }
    })

  }

}
