import { Component } from '@angular/core';
// import * as data from './products.json';
import productData from './products_data';
import { ZoominDirective } from '../../directives/zoomin.directive';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-products',
  imports: [
    ZoominDirective,
    RouterLink
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  // productsArr = (data as any).default;
  productsArr = productData;

  constructor() {
    // console.log(data);
  }
}
