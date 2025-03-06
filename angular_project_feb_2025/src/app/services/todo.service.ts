import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  initialTodos = [
    { id: 1, text: 'Complete angular Assignment', completed: false },
    { id: 2, text: 'Learn C# OOps Concept', completed: true },
  ]

  constructor() { }

  private todoSubject = new BehaviorSubject(this.initialTodos); // todoSubject - can publish,subscribe
  readonly todoObs = this.todoSubject.asObservable(); // todoObs can only be subscribed

  private todosArr = this.initialTodos;
  private nextId = 2;

  create(newToDo: any) {
    newToDo.id = ++this.nextId;
    newToDo.completed = false;
    this.todosArr.push(newToDo);
    this.todoSubject.next(Object.assign([], this.todosArr));
  }
  remove(id: number) {
    this.todosArr.forEach((todo, ind) => {
      if (todo.id === id) {
        this.todosArr.splice(ind, 1);
      }
      this.todoSubject.next(Object.assign([], this.todosArr));
    });
  }
}
