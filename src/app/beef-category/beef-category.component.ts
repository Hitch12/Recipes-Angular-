import { Component, OnInit } from '@angular/core';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-beef-category',
  templateUrl: './beef-category.component.html',
  styleUrls: ['./beef-category.component.scss']
})
export class BeefCategoryComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }
  beefItemsCategory:any[]=[];
  getBeefItems(){
    this._RespsService.getResps('beef').subscribe((response)=>{
      this.beefItemsCategory = response.meals
      //console.log(this.beefItemsCategory.slice(3,5))
    })
  }
  ngOnInit(): void {
    this.getBeefItems()
  }

}
