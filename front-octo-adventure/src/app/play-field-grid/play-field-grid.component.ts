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

  constructor() { 
    this. fGrid = new PlayFieldGrid();
    this.fGrid.columns = environment.columns;
    this.fGrid.rows = environment.rows;

    this.generateFieldGrid();
    console.log(this.fGrid.FieldGrid);
  }

    /**
   * Please note that this method is only for testing purposes. The front must not know anything about how to generate
   * a play field, only to sisplay it. That is the back-end's job.
   * 
   * i'll probably just copy paste this into the back-end or something like that
   * 
   * Generates a random play field grid. Sets te borders accordingly and whatever is in between is randomized.
   */
  private generateFieldGrid() {

    // tiles that are floor
    let floorTiles : string [] = []; 
    floorTiles.push(map.floorGray);
    floorTiles.push(map.floorDirt1);
    floorTiles.push(map.floorDirt2);
    floorTiles.push(map.floorStone1);
    floorTiles.push(map.floorStone2);

    // insert columns
    for(let x = 0; x < this.fGrid.columns; x++){
      this.fGrid.FieldGrid.push([]);

      for(let y = 0; y < this.fGrid.rows; y++){

        // if it's a upper corner tile, either left or right
        if((x == 0 && y == 0) || (x == 0 && y == this.fGrid.rows-1)){
          // its the left one
          if(y == 0)
            this.fGrid.FieldGrid[x].push(map.borderUpLeft);
          // its the right one
          else 
            this.fGrid.FieldGrid[x].push(map.borderUpRight);
          // don't forget the continue to skip to next cycle, otherwise, it might collido with the forthcoming ifs
          continue;
        }
        
        // if it's a down corner tile, either left or right
        if((x == this.fGrid.columns-1 && y == 0) || (x == this.fGrid.columns-1 && y == this.fGrid.rows-1)){
          if(y == 0)
            this.fGrid.FieldGrid[x].push(map.borderDownLeft);
          else
            this.fGrid.FieldGrid[x].push(map.borderDownRight);
          continue;
        }
        
        // if it's the upper row, but not the corners
        if((x == 0) && (y > 0 && y < this.fGrid.rows-1)){
          this.fGrid.FieldGrid[x].push(map.borderUpMid);
          continue;
        }
        
        
        // if it's the lower row, but not the corners
        if((x == this.fGrid.columns-1) && (y > 0 && y < this.fGrid.rows-1)){
          this.fGrid.FieldGrid[x].push(map.borderDownMid);
          continue;
        }

        // if it's the left/right border but not of the first/last row. weirdest-ass if ever. might as well do ML with this shit
        if(
          (y == 0 && (x > 0 && x < this.fGrid.columns-1)) // y is 0, so its left border, but x is neither 0 (first row) or the last row
          || // or
          (y == this.fGrid.rows-1 && (x > 0 && x < this.fGrid.columns-1)) // same as above, just this time, it's the right border 
          ){
              if(y == 0) // left border
                this.fGrid.FieldGrid[x].push(map.borderLeft);
              else // right border
                this.fGrid.FieldGrid[x].push(map.borderRight);
              continue; // just in case
          }

        // if you rechead this point, it means you not anywhere in the upper row, lower row, first column nor last column
        // so go full yolo and pick a tile randomly from the floor tiles.
        this.fGrid.FieldGrid[x].push(floorTiles[Math.floor(Math.random() * floorTiles.length)]);
      }
    }
  }

  ngOnInit(): void {
  }

}
