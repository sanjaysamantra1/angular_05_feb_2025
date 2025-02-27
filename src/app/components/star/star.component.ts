import { Component } from '@angular/core';

@Component({
  selector: 'app-star',
  imports: [],
  templateUrl: './star.component.html',
  styleUrl: './star.component.css'
})
export class StarComponent {
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
