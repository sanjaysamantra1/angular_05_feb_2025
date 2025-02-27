import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule,
    NgIf
  ],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';
  profile_url: string = 'https://documents.bcci.tv/resizedimageskirti/164_compress.png';
  flag: boolean = false;

  num1: number = 10;
  num2: number = 20;

  sayHello() {
    alert('Helllooooooo')
  }

  isVisible: boolean = true; // Initial state

  toggleVisibility(): void {
    this.isVisible = !this.isVisible;
  }
  maxLength: number = 100;
  text: string = '';

  get remainingChars(): number {
    return this.maxLength - this.text.length;
  }

  

  
  num_1: number = 0;
  num_2: number = 0;
  operation: string = '+';
  result: number = 0;

  calculate() {
  console.log('Num1:', this.num_1, 'Num2:', this.num_2, 'Operation:', this.operation);
  switch (this.operation) {
    case '+':
      this.result = this.num_1 + this.num_2;
      break;
    case '-':
      this.result = this.num_1 - this.num_2;
      break;
    case '*':
      this.result = this.num_1 * this.num_2;
      break;
    case '/':
      this.result = this.num_2 !== 0 ? this.num_1 / this.num_2 : NaN;
      break;
  }
  console.log('Result:', this.result);
}

 inputType: string = 'password';
  inputValue: string = '';

  toggleInputType() {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }

   count: number = 0;

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  reset() {
    this.count = 0;
  }

  isDarkMode: boolean = false;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.body.classList.toggle('dark', this.isDarkMode);
  }

  employees = [
    { "eId": 101, "name": "sanjay", "sal": 5000, "gender": "male" },
    { "eId": 104, "name": "geeta", "sal": 8000, "gender": "female" },
    { "eId": 103, "name": "sameer", "sal": 7000, "gender": "male" },
    { "eId": 102, "name": "sita", "sal": 9000, "gender": "female" },
	{ "eId": 105, "name": "deepak", "sal": 8000, "gender": "male" }
];

 
  }

  