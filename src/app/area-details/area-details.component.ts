import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-area-details',
  templateUrl: './area-details.component.html',
  styleUrls: ['./area-details.component.scss']
})
export class AreaDetailsComponent implements OnInit {

  nameOfArea:string='';
  constructor(private _RespsService:RespsService, private _ActivatedRoute:ActivatedRoute) {
    this.nameOfArea = this._ActivatedRoute.snapshot.params['area']
  }

  itemsArea:any[]=[];

  getAreaItems(){
    this._RespsService.getAreaItems(this.nameOfArea).subscribe((response)=>{
      this.itemsArea = response.meals
      //console.log(this.itemsArea)
    })
  }

  ngOnInit(): void {
    this.getAreaItems()
  }
}
