import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-zoom-buttons',
  templateUrl: './zoom-buttons.component.html',
  styleUrls: ['./zoom-buttons.component.css']
})
export class ZoomButtonsComponent implements OnInit {
  @Output() zoomButtonClicked = new EventEmitter<Number>();

  constructor() { }

  ngOnInit() {
  }

  mapZoomInOut(zoomRatio: Number){
    this.zoomButtonClicked.emit(zoomRatio);
  }

}
