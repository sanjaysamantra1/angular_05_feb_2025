import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mysort',
  pure :false
})
export class MysortPipe implements PipeTransform {

  transform(ele:any): any {
    return ele.sort((a:number,b:number)=>a-b)
  }

}
