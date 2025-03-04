import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url: string = 'http://localhost:3000/employees';

  constructor(private httpClient: HttpClient) { }

  getAllEmployees() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/users');
  }
  getEmployeeById(id: string) {
    return this.httpClient.get(`${this.api_url}/${id}`);
  }
  createNewEmployee(empoyeeObj: any) {
    return this.httpClient.post(this.api_url, empoyeeObj);
  }
  updateEmployee(id: string, empoyeeObj: any) {
    return this.httpClient.patch(`${this.api_url}/${id}`, empoyeeObj);
  }
  deleteEmployee(id: string) {
    return this.httpClient.delete(`${this.api_url}/${id}`);
  }

}
