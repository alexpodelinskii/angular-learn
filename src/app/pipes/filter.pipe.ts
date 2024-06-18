import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../app.component';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform(value: Post[], search: string = '', searchField: 'title' | 'text' = 'title'): Post[] {


    if (!search.trim()) return value;
    return value.filter(el => el[searchField].toLowerCase().includes(search.toLocaleLowerCase()));
  }

}
