import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }
  //http://localhost:3000/user

  url = "http://localhost:3000/user"

  fetchAllUsers(){
    return this.httpClient.get(this.url)
  }

fetchUserById(id:string){
  return this.httpClient.get(`${this.url}/${id}`);

}

addUser(params: any){
  return this.httpClient.post(this.url, params);
}

updateUserById(id:string, params: any){
  return this.httpClient.patch(`${this.url}/${id}`,params);
}

deleteUserbyId(id:string){
  return this.httpClient.delete(`${this.url}/${id}`)
}


}
