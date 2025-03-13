import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactus',
  imports: [FormsModule, CommonModule],
  templateUrl: './contactus.component.html',
  styleUrl: './contactus.component.css'
})
export class ContactusComponent {
  name: string = '';
  age!: number;

  hasChanges: boolean = true;

  logForm(myForm: any) {
    console.log('Form Submitted',myForm);
    this.hasChanges = false;
  }
}
