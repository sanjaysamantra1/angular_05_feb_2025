import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number):string{
    if (!value) return '';
    let suffix = 'th';
    if (value % 100 < 11 || value % 100 > 13) {
      if (value % 10 === 1) suffix = 'st';
      else if (value % 10 === 2) suffix = 'nd';
      else if (value % 10 === 3) suffix = 'rd';
    }
    
    return value + suffix;
  }
}