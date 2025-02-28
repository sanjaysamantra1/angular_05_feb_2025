import { Component } from '@angular/core';

@Component({
  selector: 'app-stars',
  imports: [],
  templateUrl: './stars.component.html',
  styleUrl: './stars.component.css'
})
export class StarsComponent {
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