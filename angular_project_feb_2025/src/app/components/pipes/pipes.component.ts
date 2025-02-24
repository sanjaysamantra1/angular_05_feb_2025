import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RemainingPipe } from '../../custom_pipes/remaining.pipe';
import { MysortPipe } from '../../custom_pipes/mysort.pipe';

@Component({
  selector: 'app-pipes',
  imports: [
    CommonModule,
    FormsModule,
    RemainingPipe,
    MysortPipe
  ],
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.css'
})
export class PipesComponent {
  myName: string = 'SachIN tEnDUlkAR';
  sal: number = 5000;
  today: Date = new Date();
  user: Object = { name: 'Sanjay', age: 50, add: 'Bangalore' };
  cars: string[] = ['Tata', 'Honda', 'Maruti', 'Hundai', 'Mahindra', 'Toyota'];

  msg: string = '';
  msg2: string = '';

  numArr1:any = [20, 50, 10, 30, 40];
}
