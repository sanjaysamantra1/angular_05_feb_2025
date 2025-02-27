import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: string | Date): string {
    const birthDate = new Date(value);
    const today = new Date();
    let age = today.getFullYear() - birthDate.getFullYear();

    if (today < new Date(birthDate.setFullYear(today.getFullYear()))) age--;

    return `${age} year${age !== 1 ? 's' : ''} old`;
  }

}
