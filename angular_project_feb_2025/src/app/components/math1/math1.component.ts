import { Component } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math1',
  imports: [],
  templateUrl: './math1.component.html',
  styleUrl: './math1.component.css'
})
export class Math1Component {
  constructor(private mathService: MathService) { // Dependency Injection
  }
  ngOnInit() {
    console.log('This is Math-1 Component')
    console.log(this.mathService.add(2, 3))
    console.log(this.mathService.sub(2, 3))
    console.log(this.mathService.mul(2, 3))
  }

}
