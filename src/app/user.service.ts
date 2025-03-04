import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiUrl='http://localhost:3000/users';

  constructor(private httpClient:HttpClient) {

   }

   getAllUsers(){
    return this.httpClient.get(this.apiUrl);
   }

   getUserById(id:string){
    return this.httpClient.get(`${this.apiUrl}/${id}`);
   }

   addNewUser(newUser:any){
    return this.httpClient.post(this.apiUrl, newUser);
   }

   updateUser(id:string,user:any){
    return this.httpClient.patch(`${this.apiUrl}/${id}`,user);
   }

   deleteUser(id:string){
    return this.httpClient.delete(`${this.apiUrl}/${id}`);
   }
}
