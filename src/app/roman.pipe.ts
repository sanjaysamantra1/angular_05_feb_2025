import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roman'
})
export class RomanPipe implements PipeTransform {

  transform(value: number): string {
    if (value < 1 || value > 3999) {
      return 'Invalid Number';
    }
    const romanMap: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];

    let result = '';
    
    for (const [num, roman] of romanMap) {
      while (value >= num) {
        result += roman;
        value -= num;
      }
    }

    return result;
  }

}
