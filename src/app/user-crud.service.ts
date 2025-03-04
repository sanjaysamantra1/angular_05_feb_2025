import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor(private httpClient: HttpClient) { }
  //http://localhost:3000/user

  apiUrl = "http://localhost:3000/users"

  fetchAllUsers(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.apiUrl);
  }

  addUser(user: any): Observable<any> {
    return this.httpClient.post<any>(this.apiUrl, user);
  }

  deleteUserById(uid: string): Observable<void> {  // Ensure it returns an observable
    return this.httpClient.delete<void>(`${this.apiUrl}/${uid}`);
  }

}