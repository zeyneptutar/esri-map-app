import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import esri = __esri;

@Component({
  selector: 'app-basemaps',
  templateUrl: './basemaps.component.html',
  styleUrls: ['./basemaps.component.css']
})
export class BasemapsComponent implements OnInit {
  @Output() newBasemap = new EventEmitter<esri.Basemap>();

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

  changeBasemap(basemap: esri.Basemap) {
    this.newBasemap.emit(basemap);
  }

}
