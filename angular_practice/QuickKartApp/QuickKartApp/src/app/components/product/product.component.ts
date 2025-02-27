import { Component } from '@angular/core';
import * as data from './product.json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@Component({
  selector: 'app-product',
  imports: [FontAwesomeModule,
    
  ],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  p:any;
  productArry = (data as any).default;
  constructor(){
    console.log(data);
  }

}
