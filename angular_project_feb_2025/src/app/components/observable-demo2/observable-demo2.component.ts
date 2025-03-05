import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { interval, Observable, take } from 'rxjs';

@Component({
  selector: 'app-observable-demo2',
  imports: [
    CommonModule
  ],
  templateUrl: './observable-demo2.component.html',
  styleUrl: './observable-demo2.component.css'
})
export class ObservableDemo2Component {
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    // this.demo_1();
    this.demo_2();
  }
  demo_1() {
    let publisher1 = new Observable((provider) => {  // publisher/Provider
      provider.next('AAAAA');
      provider.next('BBBBB');
      provider.next('CCCCC');
      provider.next('DDDDD');
      provider.complete();
    });
    publisher1.subscribe({ // subscriber
      next: (response) => {
        console.log('Next called...')
        console.log(response);
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.log('All data Received...')
      }
    });
  }

  nums: Observable<number> | undefined;
  numSubscription: any;
  numsUpto5: Observable<number> | undefined;

  demo_2() {
    this.nums = interval(2000); // publisher
    console.log(this.nums);
    this.numsUpto5 = this.nums.pipe(take(5));
    this.numSubscription = this.nums.subscribe((val: any) => {
      console.log(val)
      if (val == 7) {
        this.numSubscription.unsubscribe();
      }
    });
  }

  ngOnDestroy() {
    this.numSubscription.unsubscribe();
  }
}
