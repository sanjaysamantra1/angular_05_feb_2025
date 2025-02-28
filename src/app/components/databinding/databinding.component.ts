import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-databinding',
  imports: [CommonModule,FormsModule],
  templateUrl: './databinding.component.html',
  styleUrl: './databinding.component.css'
})
export class DatabindingComponent {
  
  isVisible=true;

  myName: string ='Nishith naidu';
  profile_url: string = 'assets/images/Nishith.jpeg';
  flag: boolean = false;

  num1: number = 10;
  num2: number = 20;
  
userInput:string='';
maxLength:number=100;

get remainingChars():number{
  return this.maxLength-this.userInput.length;
}

selectedState:string='';

number1:number=0;
number2:number=0;
operation:string="";
result:number=0;

// number1: number = 0;  
//   number2: number = 0;  
//   operation: string = "";  
//   result: number = 0; 

counter:number=0;  

  performOperation(): void {
    if (this.operation === '+') {
      this.result = this.number1 + this.number2;
    } else if (this.operation === '-') {
      this.result = this.number1 - this.number2;
    } else if (this.operation === '*') {
      this.result = this.number1 * this.number2;
    } else if (this.operation === '/') {
      if (this.num2 !== 0) {
        this.result = this.number1 / this.number2
      } else {
        this.result = NaN; 
      }
    }
  }
  isDarkTheme = false;

  toggleTheme(): void {
    this.isDarkTheme = !this.isDarkTheme;
  }
  sayHello() {
    alert('Helllooooooo')
  }
  toggleVisibility(){
    this.isVisible=!this.isVisible;
  }
  onSelectedState(){
    console.log("Selected state",this.selectedState);
  }
  
  inputValue: string = '';  
  inputType: string = 'password';  

 
  toggleInputType(): void {
    this.inputType = this.inputType === 'password' ? 'text' : 'password';
  }
  increment(){
    this.counter++;
  }
  decrement(){
    this.counter--;
  }
  reset(){
    this.counter=0;
  }
}

