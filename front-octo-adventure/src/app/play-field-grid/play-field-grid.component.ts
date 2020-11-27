import { Component, OnInit } from '@angular/core';
import { PlayFieldGrid } from '../models/play-field-grid/field-grid-model';
import map from "../../assets/asset-mapping/map.json";
import { BackConnectorService } from '../back-connector.service';
import { ResponseWrapper } from "../models/ResponseWrapper/ResponseWrapper";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-play-field-grid',
  templateUrl: './play-field-grid.component.html',
  styleUrls: ['./play-field-grid.component.css']
})
export class PlayFieldGridComponent implements OnInit {

  // this is the grid that represents the field or map
  readonly displayRows : number;
  readonly displayCols : number;
  readonly cssHeigth : number;
  readonly cssWidth : number;
  readonly cssTileSize : number;
  readonly responseWrapper$ : Observable<ResponseWrapper<PlayFieldGrid>>;

  constructor(public backService: BackConnectorService) { 

    this.displayRows  = map.displayRows;
    this.displayCols  = map.displayCols;
    this.cssHeigth  = map.tileSize * this.displayRows;
    this.cssWidth  = map.tileSize * this.displayCols;
    this.cssTileSize  = map.tileSize;
    this.responseWrapper$ = backService.getFieldMatrix();

  }

  ngOnInit(): void {
  }

}
