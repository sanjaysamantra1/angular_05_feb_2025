import { Component, ViewChild } from '@angular/core';
import { Child1Component } from '../child1/child1.component';
import { Child2Component } from '../child2/child2.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-parent',
  imports: [
    Child1Component,
    Child2Component,
    FormsModule
  ],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  @ViewChild('nameRef') nameInputBox: any;

  a = 100;
  parentName: string = '';
  flag: boolean = true;

  receiveDataFromChild(nameFromChild: string) {
    this.parentName = nameFromChild;
  }

  constructor() {
    console.log("Parent constructor");
    console.log(this.nameInputBox);
  }
  // ngOnInit() {
  //   console.log('Parent ngOnInit');
  // }
  // ngOnChanges() {
  //   console.log('Parent ngOnChanges');
  // }
  // ngDoCheck() {
  //   console.log('Parent ngDoCheck');
  // }
  // ngAfterContentInit() {
  //   console.log('Parent ngAfterContentInit');
  // }
  // ngAfterContentChecked() {
  //   console.log('Parent ngAfterContentChecked')
  // }
  ngAfterViewInit() {
    console.log('Parent ngAfterViewInit');
    console.log(this.nameInputBox);
    this.nameInputBox.nativeElement.focus();
    this.nameInputBox.nativeElement.style.backgroundColor = 'red';
  }
  // ngAfterViewChecked() {
  //   console.log('Parent ngAfterViewChecked');
  // }
  // ngOnDestroy() {
  //   console.log('Parent ngOnDestory');
  // }
}
