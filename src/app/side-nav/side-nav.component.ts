import { Component, OnInit } from '@angular/core';
import { RespsService } from '../resps.service';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private _RespsService:RespsService) { }
  term:string=this._RespsService.term;
  ngOnInit(): void {
  }

}
