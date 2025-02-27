import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees2: any[], searchTerm: string): any[] {

    if (!employees2 ||!searchTerm) {
      return employees2;
    }
    return employees2.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.sal.toString().includes(searchTerm)
    );
  }

}