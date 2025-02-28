import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation'
})
export class SalutationPipe implements PipeTransform {

  transform(name: string, gender: string): string {
  let prefix=gender.toLowerCase()=== 'male'?'Mr.':'Miss.';
  return prefix + ' ' + name;
  }

}
