import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchemployee'
})
export class SearchemployeePipe implements PipeTransform {

  transform(employees: any[], searchText: string): any[] {
    if (!employees || !searchText) {
      return employees;
    }

    searchText = searchText.toLowerCase();

    return employees.filter(emp =>
      emp.eId.toString().includes(searchText) ||
      emp.name.toLowerCase().includes(searchText) ||
      emp.sal.toString().includes(searchText) ||
      emp.gender.toLowerCase().includes(searchText) 
      
    );
    
  }

}
