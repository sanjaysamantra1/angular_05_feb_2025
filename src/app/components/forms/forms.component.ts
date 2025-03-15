import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [FormsModule,
    CommonModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.css'
})
export class FormsComponent {
  user = {
    name: '',
    email: '',
    password: '',
    gender: '',
    skills: {
      Angular: false,
      React: false,
      Java: false,
      Devops: false,

    },
    country: '',
    address: {
      street: '',
      city: '',
      state: '',
      zip: ''
    },
    comments: ''
  };

  countries = ['USA', 'Canada', 'India', 'Germany'];

  submitMyForm(form: any) {
    if (form.valid) {
      console.log('Form Submitted:', this.user);
      alert('Registration successful!');
    } else {
      alert('Please fill all required fields correctly.');
    }
  }
}