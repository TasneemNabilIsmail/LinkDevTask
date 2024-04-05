import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryName',
})
export class CategoryNamePipe implements PipeTransform {

  transform(id: string, list:any): string {
    console.log('id:', id);
    console.log('list:', list);

    return list.find((item: { id: string; name:string })=>item.id==id).name
  }

}
