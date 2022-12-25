import { Component, OnInit } from '@angular/core';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-ingredients',
  templateUrl: './ingredients.component.html',
  styleUrls: ['./ingredients.component.scss']
})
export class IngredientsComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }

  ingredientsItems:any[]=[];

  ingredientsItemsImages:any[]=[];
  ingredientsItemsNames:any[]=[];
  //categoryName:any = [];

  getIngredients(){
    this._RespsService.getIngredients().subscribe((response)=>{
      this.ingredientsItems = response['meals'].slice(0,24);

      //console.log(this.ingredientsItems);
      for (let i = 0; i < this.ingredientsItems.length; i++) {
        this.ingredientsItemsNames[i] = this.ingredientsItems[i].strIngredient;
        this.ingredientsItemsImages[i] = this._RespsService.getIngredientImage(this.ingredientsItemsNames[i])
      }

      for (let i = 0; i < this.ingredientsItems.length; i++) {
        this.ingredientsItems[i] ={
          image:this.ingredientsItemsImages[i],
          idIngredient:this.ingredientsItems[i].idIngredient,
          strDescription:this.ingredientsItems[i].strDescription.split(' ').slice(0,30).join(' '),
          strIngredient:this.ingredientsItems[i].strIngredient,
        }
      }

    })

  }
  ngOnInit(): void {
    this.getIngredients()
  }

}
