import { Component, ViewEncapsulation } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
  ],
  templateUrl: './databinding.component.html',
  // styles: ['input { color:green; }']
  styleUrl: './databinding.component.css',
  encapsulation: ViewEncapsulation.ShadowDom
})
export class DatabindingComponent {
  myName: string = 'Virat Kohli';
  profile_url: string = 'https://documents.bcci.tv/resizedimageskirti/164_compress.png';
  flag: boolean = false;
  msg: string = '';

  num1: number = 10;
  num2: number = 20;

  colspanValue: number = 2;
  user = { fName: 'Sachin', lName: 'Tendulkar', email: 'sachin@gmail.com', age: 45 };

  sayHello() {
    alert('Helllooooooo')
  }

  additionResult: number = 0;
  addition(a: string, b: string) {
    this.additionResult = +a + +b;
  }
}
