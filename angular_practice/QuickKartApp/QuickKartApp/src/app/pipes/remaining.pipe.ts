import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'remaining'
})
export class RemainingPipe implements PipeTransform {

  transform(msg:string,maxlen :number): number {
    return maxlen -msg.length;
  }

}
