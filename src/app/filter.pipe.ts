import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: Array<any>, filterdata: string): any {
    if (!items || !filterdata) 
    {return items; }

    return items.filter( it => {
  console.log(it);
        return it.toLowerCase().includes(filterdata.toLowerCase());
       // return it.toLowerCase().indexOf(filterdata.toLowerCase()) !== -1
    });
  }
  

}
