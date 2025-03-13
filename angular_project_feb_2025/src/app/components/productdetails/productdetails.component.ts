import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { query } from 'express';

@Component({
  selector: 'app-productdetails',
  imports: [
    CommonModule
  ],
  templateUrl: './productdetails.component.html',
  styleUrl: './productdetails.component.css'
})
export class ProductdetailsComponent {
  product: any;

  constructor(private activatedRoute: ActivatedRoute) {

  }
  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((productIfo) => {
      this.product = productIfo;
    });
  }
}
