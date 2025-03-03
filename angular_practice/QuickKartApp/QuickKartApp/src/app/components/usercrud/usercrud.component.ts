import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-usercrud',
  imports: [FormsModule],
  templateUrl: './usercrud.component.html',
  styleUrl: './usercrud.component.css'
})

export class UsercrudComponent {
  // users: any;
  // loading=true;
  // selectedUser: any = {};
  // user = {
  //   uid: "",
  //   uname: "",
  //   uusername: "",
  //   uemail: "",
  //   uaddress: {
  //     ustreet: "",
  //     usuite: "",
  //     ucity: "",
  //     uzipcode: "",
  //     ugeo: {
  //       latitude: "",
  //       langitute: ""
  //     }
  //   }
  // }


  // }
  // ngOnInit() {
  //   this.fetchUsers();
  // }
  // fetchUsers() {
  //   this.loading=true;
  //   this.userService.fetchAllUsers().subscribe(response => {
  //     this.users = response;
  //     this.loading=false;
  //   })
  // }
  // deleteuser(id: string) {
  //   this.userService.deleteUserbyId(id).subscribe(() => {
  //     this.fetchUsers();
  //   })
  // }
  // editUser(user: any) {
  //   this.selectedUser = { ...user }; // Clone the object to prevent changes to the list
  // }
  // updateUser() {
  //   this.userService.updateUserById(this.selectedUser.id, this.selectedUser)
  //     .subscribe(() => this.fetchUsers());
  // }
  // addUser() {
  //   this.userService.addUser(this.user).subscribe((response: any) => {
  //     // this.fetchUsers();
  //     this.users.push(response);
  //     this.user = {
  //       uid: "",
  //       uname: "",
  //       uusername: "",
  //       uemail: "",
  //       uaddress: {
  //         ustreet: "",
  //         usuite: "",
  //         ucity: "",
  //         uzipcode: "",
  //         ugeo: {
  //           latitude: "",
  //           langitute: ""
  //         }
  //       }
  //     }
  //   });
  // }

  users: any = [];
  loading: boolean = false;
  isAdd: boolean = true;
  userService;

  // Holds the selected user
  currentUser: any = { id: '', name: '', username: '', email: '' };

  constructor() {
    this.userService = inject(UserService);
  }

  FetchData() {
    this.loading = true;
    this.userService.fetchAllUsers().subscribe((response) => {
      this.users = response;
      this.loading = false;
    });
  }

  addUser() {
    this.userService.addUser(this.currentUser).subscribe(response => {
      alert("User Added Successfully");
      this.FetchData();
      this.resetForm();
    });
  }

  DeleteUser(id: string) {
    this.userService.deleteUserbyId(id).subscribe(response => {
      alert("User Deleted Successfully !!!");
      this.FetchData();
    });
  }

  EditUser(user: any) {
    this.isAdd = false;
    this.currentUser = { ...user };  //copying using spread
  }

  updateUser() {
    this.userService.updateUserById(this.currentUser.id, this.currentUser).subscribe(response => {
      alert("User Updated Successfully !!");
      this.FetchData();
      this.resetForm();
    });
  }

  resetForm() {
    this.currentUser = { id: '', name: '', username: '', email: '' };
    this.isAdd = true;
  }

}
