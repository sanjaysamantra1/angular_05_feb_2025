import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, ReplaySubject, Subject } from 'rxjs';

@Component({
  selector: 'app-subject-demo1',
  imports: [],
  templateUrl: './subject-demo1.component.html',
  styleUrl: './subject-demo1.component.css'
})
export class SubjectDemo1Component {
  constructor() {
  }
  ngOnInit() {
    // this.subjectDemo();
    // this.behaviourSubjectDemo();
    // this.replaySubjectDemo();
    this.asyncSubjectDemo();
  }
  subjectDemo() {
    let mySubject = new Subject(); // mySubject is an observable , hot
    mySubject.next('Plan-AAAA');

    mySubject.subscribe(val => console.log('Subscriber-1', val)); // subscriber-1
    mySubject.next('Plan-BBBB');
    mySubject.next('Plan-CCCC');
    mySubject.subscribe(val => console.log('Subscriber-2', val)); // subscriber-2
    mySubject.next('Plan-DDDD');
  }
  behaviourSubjectDemo() {
    let mySubject = new BehaviorSubject('Plan-Default'); // mySubject is an observable , hot
    mySubject.subscribe(val => console.log('Subscriber-1', val)); // subscriber-1
    mySubject.next('Plan-AAAA');
    mySubject.next('Plan-BBBB');
    mySubject.next('Plan-CCCC');
    mySubject.subscribe(val => console.log('Subscriber-2', val)); // subscriber-2
    mySubject.next('Plan-DDDD');
  }
  replaySubjectDemo() {
    let mySubject = new ReplaySubject(); // mySubject is an observable , hot
    mySubject.next('Plan-AAAA');
    mySubject.next('Plan-BBBB');
    mySubject.subscribe(val => console.log('Subscriber-1', val)); // subscriber-1
    mySubject.next('Plan-CCCC');
    mySubject.subscribe(val => console.log('Subscriber-2', val)); // subscriber-2
    mySubject.next('Plan-DDDD');
  }
  asyncSubjectDemo() {
    let mySubject = new AsyncSubject(); // mySubject is an observable , hot
    mySubject.next('Plan-AAAA');
    mySubject.next('Plan-BBBB');
    mySubject.subscribe(val => console.log('Subscriber-1', val)); // subscriber-1
    mySubject.next('Plan-CCCC');
    mySubject.subscribe(val => console.log('Subscriber-2', val)); // subscriber-2
    mySubject.next('Plan-DDDD');
    mySubject.complete();
    mySubject.subscribe(val => console.log('Subscriber-3', val)); // subscriber-3
  }
}
