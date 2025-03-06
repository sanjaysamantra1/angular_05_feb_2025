import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';

@Component({
  selector: 'app-todo-add',
  imports: [],
  templateUrl: './todo-add.component.html',
  styleUrl: './todo-add.component.css'
})
export class TodoAddComponent {
  constructor(private todoService: TodoService) {

  }
  addToDo(text: string) {
    this.todoService.create({text});
  }
}
