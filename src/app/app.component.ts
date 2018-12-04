import { Component } from '@angular/core';
import esri = __esri;
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'esri-loader-app';

  mapCenter = [-122.4194, 37.7749];
  basemapType = 'satellite';
  mapZoomLevel = 12;
  mapView: esri.MapView;
  basemapList: Array<esri.Basemap>[];

  mapLoadedEvent(esriMapObject: Object) {
    this.mapView = esriMapObject['mapView'];
  }

  createEsriBasemaps(esriBasemapList: Object) {
     this.basemapList = esriBasemapList['basemapList'];
     console.log("esri basemaps", this.basemapList);
  }

  onZoomButtonClicked(zoomRatio: number){
    const zoom : number = this.mapView.zoom + zoomRatio;
    const goToTarget : esri.MapViewGoToTarget = {
      zoom: zoom,
    }
    const goToOptions: esri.MapViewGoToOptions = {
      animate: true,
      duration: 400,
      easing : 'ease-in',
    }
    this.mapView.goTo(goToTarget,goToOptions);
  }
}
