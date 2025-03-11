import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-demo3',
  imports: [
    ReactiveFormsModule,
    CommonModule
  ],
  templateUrl: './form-demo3.component.html',
  styleUrl: './form-demo3.component.css'
})
export class FormDemo3Component {
  registerForm: any;

  ngOnInit() {
    this.registerForm = new FormGroup({
      firstname: new FormControl('abc', [Validators.required, Validators.minLength(5)]),
      lastname: new FormControl(),
      email: new FormControl(),
      address: new FormGroup({
        street: new FormControl(),
        city: new FormControl(),
        pincode: new FormControl(),
      })
    });
  }

  submitMyForm(formdata: any) {
    console.log(formdata);
  }
}
