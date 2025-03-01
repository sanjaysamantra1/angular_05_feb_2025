import { Component, inject } from '@angular/core';
import { MathService } from '../../services/math.service';

@Component({
  selector: 'app-math2',
  imports: [],
  templateUrl: './math2.component.html',
  styleUrl: './math2.component.css'
})
export class Math2Component {
  mathService;

  constructor() {
    this.mathService = inject(MathService);
  }

  ngOnInit() {
    console.log('This is Math-2 Component')
    console.log(this.mathService.add(10, 20))
    console.log(this.mathService.sub(10, 20))
    console.log(this.mathService.mul(10, 20))
  }
}
