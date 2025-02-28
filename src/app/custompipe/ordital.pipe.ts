import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordital'
})
export class OrditalPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
