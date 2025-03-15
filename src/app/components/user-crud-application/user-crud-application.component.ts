import { Component } from '@angular/core';
import { UsercrudService } from '../../Services/usercrud.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-user-crud-application',
  imports: [FormsModule],
  templateUrl: './user-crud-application.component.html',
  styleUrl: './user-crud-application.component.css'
})
export class UserCrudApplicationComponent {
  users: any[] = [];
  newUser = {
    id: '',
    name: "",
    username: "",
    email: "",
    address: {
      street: "",
      suite: "",
      city: "",
      zipcode: "",
      geo: {
        lat: "",
        lng: ""
      }
    },
    phone: "",
    website: "",
    company: {
      name: "",
      catchPhrase: "",
      bs: ""
    }
  }
  constructor(public usercrudService: UsercrudService) { }
  ngOnInit() {
    this.usercrudService.getUsers()
  }
  addUsers() {
    this.usercrudService.addUsers(this.newUser);
  }
  deleteUser(user: any) {
    this.usercrudService.deleteUser(user);
  }
  updateUser(user: any){
    this.usercrudService.updateUsers(user);

  }
}

