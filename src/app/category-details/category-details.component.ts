import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.scss']
})
export class CategoryDetailsComponent implements OnInit{
  nameOfCategory:string='';
  constructor(private _RespsService:RespsService, private _ActivatedRoute:ActivatedRoute) {
    this.nameOfCategory = this._ActivatedRoute.snapshot.params['category']
  }

  itemsCategory:any[]=[];

  getCategoryItems(){
    this._RespsService.getResps(this.nameOfCategory).subscribe((response)=>{
      this.itemsCategory = response.meals
      //console.log(this.itemsCategory)
    })
  }

  ngOnInit(): void {
    this.getCategoryItems()
  }

}
