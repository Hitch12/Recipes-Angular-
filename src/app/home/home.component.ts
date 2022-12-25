import { Component, OnInit } from '@angular/core';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }
  beefItemsCategory:any[]=[];
  chickenItemsCategory:any[]=[];
  dessertItemsCategory:any[]=[];
  pastaItemsCategory:any[]=[];
  seafoodItemsCategory:any[]=[];
  veganItemsCategory:any[]=[];

  getBeefItems(){
    this._RespsService.getResps('beef').subscribe((response)=>{
      this.beefItemsCategory = response.meals
      this.beefItemsCategory.slice(3,5);
      //console.log(this.beefItemsCategory.slice(3,5))
    })
  }
  getChickenItems(){
    this._RespsService.getResps('chicken').subscribe((response)=>{
      this.chickenItemsCategory = response.meals
      this.chickenItemsCategory.slice(3,5);
      //console.log(response)
    })
  }
  getDessertItems(){
    this._RespsService.getResps('dessert').subscribe((response)=>{
      this.dessertItemsCategory = response.meals
      this.dessertItemsCategory.slice(3,5);
      //console.log(response)
    })
  }
  getPastaItems(){
    this._RespsService.getResps('pasta').subscribe((response)=>{
      this.pastaItemsCategory = response.meals
      this.pastaItemsCategory.slice(3,5);
      //console.log(response)
    })
  }
  getSeafoodItems(){
    this._RespsService.getResps('seafood').subscribe((response)=>{
      this.seafoodItemsCategory = response.meals
      this.seafoodItemsCategory.slice(3,5);
      //console.log(response)
    })
  }
  getVeganItems(){
    this._RespsService.getResps('vegan').subscribe((response)=>{
      this.veganItemsCategory = response.meals
      this.veganItemsCategory.slice(3,5);
      //console.log(response)
    })
  }


  ngOnInit(): void {
    this.getBeefItems()
    this.getChickenItems()
    this.getDessertItems()
    this.getPastaItems()
    this.getSeafoodItems()
    this.getVeganItems()
  }

}
