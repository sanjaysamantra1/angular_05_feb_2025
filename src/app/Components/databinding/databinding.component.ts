import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-databinding',
  imports: [FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
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
      case '*': return this.num1 * this.num2;
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

  isDarkMode = false



//   employees = [
//     { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
//     { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
//     { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
//     { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
// 	{ "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
// ];



}


