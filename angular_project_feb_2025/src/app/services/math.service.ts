import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MathService {
  PI = 3.141;

  add(a: number, b: number) {
    return `Addition of ${a} and ${b} is ${a + b}`;
  }
  sub(a: number, b: number) {
    return `Subtraction of ${a} and ${b} is ${a - b}`;
  }
  mul(a: number, b: number) {
    return `Multiplication of ${a} and ${b} is ${a * b}`;
  }
}
