import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-databinding',
  imports: [
    FormsModule
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
}
