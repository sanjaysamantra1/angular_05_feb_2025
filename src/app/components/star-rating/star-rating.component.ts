import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-star-rating',
  imports:[CommonModule],
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rating: number = 0;
  hoverRating: number = 0;
  stars: number[] = [1, 2, 3, 4, 5];

  setRating(star: number): void {
    this.rating = star;
  }
}