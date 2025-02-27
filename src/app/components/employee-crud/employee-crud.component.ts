import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import Swal from "sweetalert2";

@Component({
  selector: 'app-employee-crud',
  imports: [FormsModule],
  templateUrl: './employee-crud.component.html',
  styleUrl: './employee-crud.component.css'
})
export class EmployeeCRUDComponent {

  employees = [{ "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male", action: "Added" },
  { "eId": 102, "name": "geeta", "sal": 8000, "gender": "female", action: "Added" },
  { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male", action: "Added" },
  { "eId": 104, "name": "sita", "sal": 9000, "gender": "female", action: "Added" },
  { "eId": 105, "name": "deepak", "sal": 8000, "gender": "male", action: "Added" }];


  action: string = ""
  flag: boolean = true
  newemployee = { eId: '', name: '', gender: '', sal: '' };

  delete(emp: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "This action cannot be undone!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.employees = this.employees.filter(em => em.eId !== emp.eId);
        Swal.fire("Deleted!", "Employee has been removed.", "success");
      }
    });

  }

  add() {
    if (!this.newemployee.eId || !this.newemployee.name || !this.newemployee.sal || !this.newemployee.gender) {
      Swal.fire("Error", "Please fill all fields!", "error");
      return;
    }
    this.employees.push({
      eId: Number(this.newemployee.eId),
      name: this.newemployee.name,
      gender: this.newemployee.gender,
      sal: Number(this.newemployee.sal),
      action: "Added"

    })
    this.newemployee = { eId: '', name: '', sal: '', gender: '' };
    Swal.fire("Success", "Employee added successfully!", "success");

  }


}
