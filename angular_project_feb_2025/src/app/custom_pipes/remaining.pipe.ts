import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining', 
  // pure: false // Impure Pipe,
})
export class RemainingPipe implements PipeTransform {

  transform(msg: string, maxlength: number = 100): number {
    console.log('remaining pipe called...');
    return maxlength - msg.length;
  }

}
