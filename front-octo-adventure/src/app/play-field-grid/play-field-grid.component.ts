import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { PlayFieldGrid } from '../models/play-field-grid/field-grid-model';
import map from "../../assets/asset-mapping/map.json";

@Component({
  selector: 'app-play-field-grid',
  templateUrl: './play-field-grid.component.html',
  styleUrls: ['./play-field-grid.component.css']
})
export class PlayFieldGridComponent implements OnInit {

  // this is the grid that represents the field or map
  fGrid: PlayFieldGrid;
  readonly displayRows : number = map.displayRows;
  readonly displayCols : number = map.displayCols;


  constructor() { 
    this. fGrid = new PlayFieldGrid();
    this.fGrid.columns = map.fieldCols;
    this.fGrid.rows = map.fieldRows;
    this.fGrid.cssHeigth = map.tileSize * this.displayRows;
    this.fGrid.cssWidth = map.tileSize * this.displayCols;
    this.fGrid.cssTileSize = map.tileSize;

    this.generateFieldGrid(this.fGrid.rows,this.fGrid.columns);
  }

    /**
   * Please note that this method is only for testing purposes. The front must not know anything about how to generate
   * a play field, only to sisplay it. That is the back-end's job.
   * 
   * i'll probably just copy paste this into the back-end or something like that
   * 
   * Generates a random play field grid. Sets te borders accordingly and whatever is in between is randomized.
   */
  private generateFieldGrid(rows: number, columns: number) {

    // tiles that are floor
    let floorTiles : string [] = []; 
    floorTiles.push(map.floorGray);
    floorTiles.push(map.floorDirt1);
    floorTiles.push(map.floorDirt2);
    floorTiles.push(map.floorStone1);
    floorTiles.push(map.floorStone2);

    // insert columns
    /**
     * [row][column]
     * I added this, because i was looping in the wrong direction xD
     */
    for(let row = 0; row < rows; row++){
      this.fGrid.FieldGrid.push([]);

      for(let col = 0; col < columns; col++){
        
        // if it's a upper corner tile, either left or right
        if((row == 0 && col == 0) || (row == 0 && col == columns-1)){
          // its the left one
          if(col == 0)
            this.fGrid.FieldGrid[row].push(map.borderUpLeft);
          // its the right one
          else 
            this.fGrid.FieldGrid[row].push(map.borderUpRight);
          continue; // go-to next cycle jail, or add a tile where it shouldn't be 
        }
        
        // if it's a lower corner tile, either left or right
        if((row == rows-1 && col == 0) || (row == rows-1 && col == columns-1)){
          if(col == 0)
            this.fGrid.FieldGrid[row].push(map.borderDownLeft);
          else
            this.fGrid.FieldGrid[row].push(map.borderDownRight);
          continue; // go-to next cycle jail, or add a tile where it shouldn't be 
        }
      
        // if it's the upper row, but not the corners
        if((row == 0) && (col > 0 && col < columns-1)){
          this.fGrid.FieldGrid[row].push(map.borderUpMid);
          continue; // go-to next cycle jail, or add a tile where it shouldn't be 
        }
        
        // if it's the lower row, but not the corners
        if((row == rows-1) && (col > 0 && col < columns-1)){
          this.fGrid.FieldGrid[row].push(map.borderDownMid);
          continue; // go-to next cycle jail, or add a tile where it shouldn't be 
        }
        
        // if it's the left/right border but not of the first/last row. weirdest-ass if ever. might as well do ML with this shit
        if(
          (col == 0 && (row > 0 && row < rows-1)) // col is 0, so its left border, but row is neither 0 (first row) or the last row
          || // or
          (col == columns-1 && (row > 0 && row < rows-1)) // same as above, just this time, it's the right border 
          ){
              if(col == 0) // left border
                this.fGrid.FieldGrid[row].push(map.borderLeft);
              else // right border
                this.fGrid.FieldGrid[row].push(map.borderRight);
              continue; // go-to next cycle jail, or add a tile where it shouldn't be 
          }
          
        // if you rechead this point, it means you are not anywhere in the upper row, lower row, first column nor last column
        // so go full yolo and pick a tile randomly from the floor tiles.
        this.fGrid.FieldGrid[row].push(floorTiles[Math.floor(Math.random() * floorTiles.length)]);
      }
    }
  }

  ngOnInit(): void {
  }

}
