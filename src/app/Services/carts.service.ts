import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartsService {
  apiurl: string = 'http://localhost:3000/todos';

  constructor(private httpClient: HttpClient) { }

  getAllToDos() {
    return this.httpClient.get(this.apiurl);
  }

  getToDosById(id: string) {
    return this.httpClient.get(`${this.apiurl}/${id}`);
  }

  createNewToDos(todosobj: any) {

    return this.httpClient.post(this.apiurl, todosobj);

  }

  updateToDos(id: string, todosobj: any) {

    return this.httpClient.patch(`${this.apiurl}/${id}`, todosobj);

  }

  deleteToDos(id: string) {

    return this.httpClient.delete(`${this.apiurl}/${id}`);

  }

}
