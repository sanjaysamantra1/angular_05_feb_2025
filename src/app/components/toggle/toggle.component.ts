import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-toggle',
  imports: [FormsModule,CommonModule],
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.css']
})
export class ToggleComponent {
  isVisible: boolean = true;


  toggleVisibility() {
    this.isVisible = !this.isVisible;
  }

   maxLength = 100;
  textInput = '';



  states = ['New York', 'California', 'Texas', 'Florida', 'Illinois'];
  selectedState = '';



  num1 = 0;
  num2 = 0;
  operator = '+';
  get result() {
    switch (this.operator) {
      case '+': return this.num1 + this.num2;
      case '-': return this.num1 - this.num2;
      case '': return this.num1 * this.num2;
      case '/': return this.num2 !== 0 ? this.num1 / this.num2 : 'Cannot divide by zero';
      default: return 0;
    }
  }


  inputType = 'password';


  counter = 0;
  increment(){
    this.counter++;

  }
  decrement(){
    this.counter--;

  }
  reset(){
    this.counter = 0;

  }

  isDarkMode = false;
}