import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'agein'
})
export class AgeinPipe implements PipeTransform {

  transform(dob :string): string {
    const birthDate = new Date(dob);
     const today = new Date();
    let year = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      year--; 
    }

    return `${year} old`;
  }

}
