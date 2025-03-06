import { Component } from '@angular/core';
import { TodoService } from '../../services/todo.service';
import { CommonModule } from '@angular/common';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-todo-cards',
  imports: [CommonModule],
  templateUrl: './todo-cards.component.html',
  styleUrl: './todo-cards.component.css'
})
export class TodoCardsComponent {
  todos$!: Observable<any>;
  constructor(private todoService: TodoService) { }
  ngOnInit(): void {
    this.todos$ = this.todoService.todoObs;
  }
  deleteTodo(id: number) {
    this.todoService.remove(id);
  }
}
