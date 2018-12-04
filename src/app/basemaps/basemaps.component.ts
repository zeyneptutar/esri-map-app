import { Component, OnInit, Input } from '@angular/core';
import esri = __esri;

@Component({
  selector: 'app-basemaps',
  templateUrl: './basemaps.component.html',
  styleUrls: ['./basemaps.component.css']
})
export class BasemapsComponent implements OnInit {
  private _basemapList: Array<esri.Basemap>[] = [];

  @Input()
  set basemapList(basemapList: Array<esri.Basemap>[]){
    this._basemapList = basemapList;
  }

  get basemapList() {
    return this._basemapList;
  }

  constructor() { }

  ngOnInit() {
  }

}
