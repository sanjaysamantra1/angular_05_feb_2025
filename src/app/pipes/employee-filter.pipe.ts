import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'employeeFilter',
})
export class EmployeeFilterPipe implements PipeTransform {
  transform(employees: any[], searchText: string): boolean {
    if (!searchText || !employees) return false;
    return employees.some(emp => emp.name.toLowerCase() === searchText.toLowerCase());
  }
}
