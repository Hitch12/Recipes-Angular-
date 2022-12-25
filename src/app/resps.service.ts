import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RespsService {
  constructor(private _HttpClient: HttpClient) {}
  term:string=''
  getResps(category: string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`)
  }
  getCategory():Observable<any>{
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
  }
  getDetails(idMeal: string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  }

  getAreas():Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
  }
  getAreaItems(nameOfArea: string):Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${nameOfArea}`)
  }

  getIngredients():Observable<any>
  {
    return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
  }
  getIngredientImage(ingredient:string):any
  {
    return `https://www.themealdb.com/images/ingredients/${ingredient}.png`
  }



  // getMealByChar(char: string):Observable<any>
  // {
  //   return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/search.php?f=${char}`)
  // }

  // getCategoryDetails()
  // {
  //   return this._HttpClient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`)
  // }
}
