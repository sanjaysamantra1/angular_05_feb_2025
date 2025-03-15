import { Component } from '@angular/core';
import { CartsService } from '../../Services/carts.service';
import { FormsModule } from '@angular/forms';
import { response } from 'express';

@Component({
  selector: 'app-carts',
  imports: [FormsModule],
  templateUrl: './carts.component.html',
  styleUrl: './carts.component.css'
})
export class CartsComponent {
  todos: any = [];
  isLoading: boolean = false;
  isAdd: boolean = true;
  currentToDosList: any;
  todosobj = {
    "id": " ",
    "todo": " ",
    "completed": " ",
    "userId": " "

  }

  constructor(private cartsService: CartsService) {

  }
  getToDos() {
    this.isLoading = true;
    this.cartsService.getAllToDos().subscribe((response) => {
      this.todos = response;
      this.isLoading = false;
    })
  }
  AddNewToDosList() {
    this.cartsService.createNewToDos(this.todosobj).subscribe((response) => {
      alert("ToDos List added Sucessfully!!")
      this.getToDos();
      this.resetForm();


    })
  }
  deleteToDosList(id: string) {
    this.cartsService.deleteToDos(id).subscribe((response) => {
      alert("ToDos List deleted Sucessfully!!")

      this.getToDos();
    })

  }
  editToDosList(todo: any) {
    this.isAdd = false;
    this.todosobj = { ...todo };
  }

  SaveEditedToDosList() {
    this.cartsService.updateToDos(this.todosobj.id, this.todosobj).subscribe((response) => {
      // this.currentToDosList = {};
      alert("ToDos List updated Sucessfully!!")
      this.getToDos();
      this.resetForm();

    })
  }
  resetForm() {
    this.todosobj = { id: "", todo: "", completed: "", userId: "" };
    this.isAdd = true;
  }
}
