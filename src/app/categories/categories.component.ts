import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }

  Categories:any[]=[];
  categoryName:any = [];
  getCategories(){
    this._RespsService.getCategory().subscribe((response)=>{
      this.Categories = response.categories
      for (let i = 0; i < this.Categories.length; i++) {
        this.categoryName[i] = this.Categories[i].strCategory;
      }
      // console.log(this.Categories)
      // console.log(this.categoryName)
    })
  }
  ngOnInit(): void {
    this.getCategories()
  }

}
