import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css',
  inputs: ['aChild', 'child1Ref'],
  outputs: ['nameEvent']
})
export class Child2Component {
  aChild: any;
  child1Ref: any;
  name: string = 'Sachin Tendulkar';

  nameEvent = new EventEmitter();
  sendDataToParent() {
    this.nameEvent.emit(this.name);
  }
}
