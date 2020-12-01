import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatGridListModule } from '@angular/material/grid-list';
import { PlayFieldGridComponent } from './play-field-grid/play-field-grid.component';
import { GridDirectDirective } from './grid-direct.directive';
import { HttpClientModule } from '@angular/common/http';
import { BackConnectorService } from "./back-connector.service";

@NgModule({
  declarations: [
    AppComponent,
    PlayFieldGridComponent,
    GridDirectDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatGridListModule,
    HttpClientModule
  ],
  providers: [BackConnectorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
