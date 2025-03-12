import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-template',
  imports: [CommonModule,FormsModule],
  templateUrl: './form-template.component.html',
  styleUrl: './form-template.component.css'
})
export class FormTemplateComponent {
submitMyForm(myForm: any) {
console.log(myForm);
console.log(myForm.value);
}

}
