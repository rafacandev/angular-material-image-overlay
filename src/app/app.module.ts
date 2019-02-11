import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AngularMaterialImageOverlayModule } from 'projects/angular-material-image-overlay/src/public_api';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularMaterialImageOverlayModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
