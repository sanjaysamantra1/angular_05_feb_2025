import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent {
  rating: number = 0;
  maxStars: number = 5;
  stars: boolean[] = [];
  ngOnInit() {
    this.stars = Array(this.maxStars).fill(false);
  }
  rate(stars: number) {
    this.rating = stars;
  }
}