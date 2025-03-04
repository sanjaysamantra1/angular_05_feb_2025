import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../user.service';
@Component({
  selector: 'app-user-crud',
  imports: [FormsModule,CommonModule],
  templateUrl: './user-crud.component.html',
  styleUrl: './user-crud.component.css'
})
export class UserCrudComponent {

  newUser: any = {
    id:'',
    name: '',
    email: '',
    phone: '',
    company: ''
  };

  isAddedUser=true;

  users: any = [];
  isLoading: boolean = false;

 
  editedUser: any;

  constructor(private userService: UserService) { }

  fetchUsers() {
    this.isLoading = true;
    this.userService.getAllUsers().subscribe(response => {
      this.users = response;
      console.log(this.users);
      this.isLoading = false;
    });
  }

  addUser() {
    if (this.newUser.name && this.newUser.email && this.newUser.phone && this.newUser.company) {
      this.userService.addNewUser(this.newUser).subscribe(response => {
        alert("User added successfully");
        this.fetchUsers(); 
        this.resetForm(); 
      });
    } else {
      alert("Please fill all the fields!");
    }
  }

  deleteUser(id: any) {
   this.userService.deleteUser(id).subscribe(response =>{
    alert("User deleted successfully!");
    this.fetchUsers();
   });
  }


  editUser(user: any) {
    this.isAddedUser = false;
    this.newUser = { ...user };
  }

  saveEditedUser() {
    if (!this.newUser.id) {
      alert("No user selected for editing!");
      return;
    }
    this.userService.updateUser(this.newUser.id, this.newUser).subscribe(response => {
      alert("User edited successfully");
      this.fetchUsers();
      this.resetForm();
    });
  }
    
    resetForm() {
      this.newUser = {
        id: '',
        name: '',
        email: '',
        phone: '',
        company: ''
      };
      this.isAddedUser = true;
    }
}