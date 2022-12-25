import { Pipe, PipeTransform } from '@angular/core';
import { RespsService } from './resps.service';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  constructor(private _RespsService:RespsService){}

  transform(items: any[], term: string): any {
    return items.filter((item)=>item.strMeal.toLowerCase().includes(term.toLowerCase()));
    //return items.filter(()=>this._RespsService.getMealByChar(term))
  }

}
