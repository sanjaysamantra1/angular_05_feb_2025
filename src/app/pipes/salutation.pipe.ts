//  Assignment
// ==========
// 1. Create a custom pipe(ordinal) which takes a number as input and returns in ordinal format
//    input : 21,22,23,24  output : 21st, 22nd , 23rd, 24th
// 2. create a custom pipe(Roman) which takes a number as input and returns its equivalent roman value
//    input :  4    8     9
//    output : IV  VIII   IX
// 3. create a custom pipe called 'age' which takes a date as input and returns the age in years.
//    input : 04-06-2020
//    output : 5 years old
// 4. declare an array of employee objects. display them in a table.
//    create a custom pipe Salutation that will add 'mr. / miss.' before the employee name.
// 5. declare an array of employee objects. display them in a table.
//    add a search-box above the table. create a custom-pipe to filter/search employees data.

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salutation',
})
export class SalutationPipe implements PipeTransform {
  transform(name: string, gender: string): string {
    return gender === 'M' ? `Mr. ${name}` : `Miss. ${name}`;
  }
}
