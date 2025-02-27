import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal'
})
export class OrdinalPipe implements PipeTransform {

  transform(value : any): any {
    if (!value) return '';

    const lastDigit = value % 10;
    const lastTwoDigits = value % 100;

    if ([11, 12, 13].includes(lastTwoDigits)) {
      return value + 'th';
    }

    return value + (lastDigit === 1 ? 'st' : lastDigit === 2 ? 'nd' : lastDigit === 3 ? 'rd' : 'th');
  }

}
