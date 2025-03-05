import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-observable-demo3',
  imports: [],
  templateUrl: './observable-demo3.component.html',
  styleUrl: './observable-demo3.component.css'
})
export class ObservableDemo3Component {
  githubData: any[] = []

  constructor(private httpClient: HttpClient) {
  }
  ngOnInit() {
    let sanjayDataProvider = this.httpClient.get('https://jsonplaceholder.typicode.com/users/1');
    let remanaDataProvider = this.httpClient.get('https://jsonplaceholder.typicode.com/users/3');
    let akshitaDataProvider = this.httpClient.get('https://jsonplaceholder.typicode.com/users/9');

    forkJoin([sanjayDataProvider, remanaDataProvider, akshitaDataProvider]).subscribe(
      ([sanjayData, remanaData, akshitaData]) => {
        this.githubData = [sanjayData, remanaData, akshitaData];
        console.log(this.githubData);
      }
    );
  }
}
