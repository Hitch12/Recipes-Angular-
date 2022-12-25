import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  idMeal:string='';
  mealDetails:any;
  ingredients:Array<string>=[];
  measure:Array<string>=[];
  Resps:Array<string>=[];
  constructor(private _ActivatedRoute:ActivatedRoute,private _RespsService:RespsService) {
    this.idMeal = this._ActivatedRoute.snapshot.params['idMeal']
}
  getDetails()
  {
    this._RespsService.getDetails(this.idMeal).subscribe((response)=>{
      this.mealDetails = response.meals[0]
      //let resapys =new Map(Object.entries(this.mealDetails))

      for(let i=1;i<=20;i++)
      {
        if (this.mealDetails[`strIngredient${i}`]) {
          this.ingredients.push(this.mealDetails[`strIngredient${i}`])
        }
        if (this.mealDetails[`strMeasure${i}`]) {
          this.measure.push(this.mealDetails[`strMeasure${i}`])
        }
      }
      for(let i=1;i<=this.measure.length;i++){
        if(this.measure[i]){
          this.Resps.push(`${this.measure[i]} ${this.ingredients[i]}`)
        }
      }
      console.log(this.Resps);

    })
  }

  ngOnInit(): void {
    this.getDetails()

  }

}
