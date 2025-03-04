import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IEmployee } from '../models/employee_model';
import { Employee } from '../models/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  api_url: string = 'http://localhost:3000/mployees';

  constructor(private httpClient: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    // return this.httpClient.get<Employee[]>(this.api_url);

    return this.httpClient.get<Employee[]>(this.api_url).pipe(
      map((responseArr: Employee[]) => { // rxjs map()
        return responseArr.map((emp: Employee) => { // javascript array map()
          return new Employee(emp.id, emp.firstName, emp.lastName, emp.email, emp.gender, emp.sal);
        });
      })
    );
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
