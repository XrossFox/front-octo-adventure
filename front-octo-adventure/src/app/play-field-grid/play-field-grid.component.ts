import { Component, OnInit } from '@angular/core';
import { PlayFieldGrid } from '../models/play-field-grid/field-grid-model';
import map from "../../assets/asset-mapping/map.json";
import { BackConnectorService } from '../back-connector.service';
import { ResponseWrapper } from "../models/ResponseWrapper/ResponseWrapper";

@Component({
  selector: 'app-play-field-grid',
  templateUrl: './play-field-grid.component.html',
  styleUrls: ['./play-field-grid.component.css']
})
export class PlayFieldGridComponent implements OnInit {

  // this is the grid that represents the field or map
  readonly displayRows : number = map.displayRows;
  readonly displayCols : number = map.displayCols;
  readonly cssHeigth : number = map.tileSize * this.displayRows;
  readonly cssWidth : number = map.tileSize * this.displayCols;
  readonly cssTileSize : number = map.tileSize;

  public fGrid : PlayFieldGrid;
  

  constructor(private backService: BackConnectorService) { 

    backService.getFieldMatrix().subscribe(res => {
      this.fGrid = res.body;
    });

    //this.wrap

    /*
    this.fGrid = new PlayFieldGrid();
    this.fGrid.columns = map.fieldCols;
    this.fGrid.rows = map.fieldRows;
    this.fGrid.cssHeigth = map.tileSize * this.displayRows;
    this.fGrid.cssWidth = map.tileSize * this.displayCols;
    this.fGrid.cssTileSize = map.tileSize;

    this.generateFieldGrid(this.fGrid.rows,this.fGrid.columns);
    */

  }

  ngOnInit(): void {
  }

}
