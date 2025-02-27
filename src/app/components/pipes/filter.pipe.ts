import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(employees: any[], searchTerm: string): any[] {

    if (!employees || !searchTerm) {
      return employees;
    }
    return employees.filter(employee =>
      employee.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      employee.sal.toString().includes(searchTerm)
    );
  }

}
