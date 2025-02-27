import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-star-rating',
  imports: [FormsModule,CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrl: './star-rating.component.css'
})
export class StarRatingComponent {

  rate :number = 0;
  starsarray  :any =[1,2,3,4,5];

  ratingchange(star:number):void {
    this.rate=star;

  }


}
