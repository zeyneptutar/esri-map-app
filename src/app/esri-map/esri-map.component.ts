import { Component, OnInit, ViewChild, ElementRef, Input, Output, EventEmitter } from '@angular/core';
import { loadModules } from 'esri-loader';
import esri = __esri;

@Component({
  selector: 'app-esri-map',
  templateUrl: './esri-map.component.html',
  styleUrls: ['./esri-map.component.css']
})
export class EsriMapComponent implements OnInit {

  @Output() mapLoaded = new EventEmitter<Object>();
  @Output() basemapListObject = new EventEmitter<Object>();
  
  @ViewChild('mapViewNode') private mapViewEl: ElementRef;

  private _zoom: number;
  private _center: Array<number>;
  private _basemap: string;

  @Input()
  set zoom(zoom: number) {
    this._zoom = zoom;
  }

  get zoom(): number {
    return this._zoom;
  }

  @Input()
  set center(center: Array<number>) {
    this._center = center;
  }

  get center(): Array<number> {
    return this._center;
  }

  @Input()
  set basemap(basemap: string) {
    this._basemap = basemap;
  }

  get basemap(): string {
    return this._basemap;
  }

  constructor() { }

  async initializeMap() {
    try {
      const [EsriMap, EsriBasemap, EsriMapView, SpatialReference, Extent] = await loadModules([
        'esri/Map',
        'esri/Basemap',
        'esri/views/MapView',
        "esri/geometry/SpatialReference",
        "esri/geometry/Extent",
      ]);

      // Set type of map
      const mapProperties: esri.MapProperties = {
        basemap: this._basemap,
      };

      const map: esri.Map = new EsriMap(mapProperties);
      //create custom extent
      const ext: esri.Extent= new Extent({
        xmin: 26,
        xmax: 45,
        ymin: 36,
        ymax: 42,
        spatialReference: new SpatialReference(4326)
      });

      // Set type of map view
      const mapViewProperties: esri.MapViewProperties = {
        container: this.mapViewEl.nativeElement,
        // center: this._center,
        //zoom: this._zoom,
        extent: ext,
        map: map,
        ui: {
          components: [ "attribution" ]
        },
      };

      const mapView: esri.MapView = new EsriMapView(mapViewProperties);

      const basemaps: Array<esri.Basemap> = [];

      const esriStreetBasemap = EsriBasemap.fromId("streets");
      const esriSatelliteBasemap = EsriBasemap.fromId("satellite");
      const esriHybridBasemap = EsriBasemap.fromId("hybrid");

      basemaps.push(esriStreetBasemap, esriSatelliteBasemap, esriHybridBasemap);

      mapView.when(() => {
        const esriMapObject = {
          mapView: mapView,
        };
        const esriBasemapList = {
          basemapList: basemaps,
        }
        
        this.mapLoaded.emit(esriMapObject);
        this.basemapListObject.emit(esriBasemapList);
      });
    } catch (error) {
      alert('We have an error: ' + error);
    }

  }

  ngOnInit() {
    this.initializeMap();
  }

}
