import { Component, OnInit } from '@angular/core';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }

  areas:any[]=[];
  areaName:any = [];
  getAreas(){
    this._RespsService.getAreas().subscribe((response)=>{
      this.areas = response['meals']

      //console.log(this.areas)
    })
  }
  ngOnInit(): void {
    this.getAreas()
  }

}
