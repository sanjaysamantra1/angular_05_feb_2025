import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordinal',
  standalone:true
})
export class OrdinalPipe implements PipeTransform {

  transform(value: number): string {
   if(!value || isNaN(value))  return 'Invalid Input';


    const suffixes = ['th', 'st', 'nd', 'rd'];
    const remainder = value % 100;


    return value + (suffixes[(remainder - 20) % 10] || suffixes[remainder] || suffixes[0]);
  }

}
