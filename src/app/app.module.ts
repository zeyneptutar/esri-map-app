import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EsriMapComponent } from './esri-map/esri-map.component';
import { ZoomButtonsComponent } from './zoom-buttons/zoom-buttons.component';
import { BasemapsComponent } from './basemaps/basemaps.component';

@NgModule({
  declarations: [
    AppComponent,
    EsriMapComponent,
    ZoomButtonsComponent,
    BasemapsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
