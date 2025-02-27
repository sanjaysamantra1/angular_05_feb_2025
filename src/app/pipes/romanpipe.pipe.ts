import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'romanpipe'
})
export class RomanpipePipe implements PipeTransform {

  transform(value: number) {
    const map: [number, string][] = [
      [1000, 'M'], [900, 'CM'], [500, 'D'], [400, 'CD'],
      [100, 'C'], [90, 'XC'], [50, 'L'], [40, 'XL'],
      [10, 'X'], [9, 'IX'], [5, 'V'], [4, 'IV'], [1, 'I']
    ];
    return map.reduce((res, [n, sym]) => {
      while (value >= n) { res += sym; value -= n; }
      return res;
    }, '');
  }

}
