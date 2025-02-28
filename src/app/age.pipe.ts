import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(birthdate: string | Date): string {
   let birth= new Date(birthdate);
   let today=new Date();
   let age= today.getFullYear()-birth.getFullYear();
   let monthDiff= today.getMonth()-birth.getMonth();
    
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birth.getDate())) {
      age--;
    }

    return `${age} years old`;
  }

}
