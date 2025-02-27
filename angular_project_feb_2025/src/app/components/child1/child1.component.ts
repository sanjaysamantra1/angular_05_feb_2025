import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child1',
  imports: [FormsModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css',
  inputs: ['a']
})
export class Child1Component {
  a: any;
  b: any;

  constructor() {
    this.b = 200;
    console.log('child constructor');
  }
  ngOnChanges(myChanges:any) {
    console.log('child ngOnChanges');
    console.log(myChanges)
  }
  ngOnInit() {
    console.log('child ngOnInit');
  }
  ngDoCheck() {
    console.log('child ngDoCheck');
  }
  // ngAfterContentInit() {
  //   console.log('child ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('child ngAfterContentChecked')
  // }
  // ngAfterViewInit() {
  //   console.log('child ngAfterViewInit');
  // }
  // ngAfterViewChecked() {
  //   console.log('child ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('child ngOnDestory');
  // }
}
