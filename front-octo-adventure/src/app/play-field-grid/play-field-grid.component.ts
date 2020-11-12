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

    for(let i = 0; i < this.fGrid.rows; i++){
      this.fGrid.FieldGrid.push([]);

      for(let j = 0; j < this.fGrid.columns; j++){
        if(i == 0)
          this.fGrid.FieldGrid[i][j] = map.pic1;
        else{
          let x = Math.floor(Math.random() * (4 - 1 + 1)) + 1;

          switch(x){
            case 1:{
              this.fGrid.FieldGrid[i][j] = map.pic2;
              break;
            }
            case 2:{
              this.fGrid.FieldGrid[i][j] = map.pic3;
              break;
            }
            case 3:{
              this.fGrid.FieldGrid[i][j] = map.pic4;
              break;
            }
            case 4:{
              this.fGrid.FieldGrid[i][j] = map.pic3;
              break;
            }
          }
        }
      }
    }

    console.log(this.fGrid.FieldGrid);

  }

    /**
   * Please note that this method is only for testing purposes. The front must not know anything about how to generate
   * a play field, only to sisplay it. That is the back-end's job.
   * 
   * Generates a random play field grid. Sets te borders accordingly and whatever is in between is randomized.
   */
  private generateFieldGrid() {

    // insert columns
    for(let x = 0; x < this.fGrid.columns; x++){
      this.fGrid.FieldGrid.push([]);

      for(let y = 0; y < this.fGrid.rows; y++){
        
        // if it's a upper corner tile, either left or right
        if((x == 0 && y == 0) || (x == this.fGrid.columns && y == 0)){
          // its the left one
          if(x == 0)
            this.fGrid.FieldGrid[x][y] == map.borderUpLeft;
          // its the right one
          else 
            this.fGrid.FieldGrid[x][y] == map.borderUpRight;
          // don't forget the continue to skip to next cycle, otherwise, it might collido with the forthcoming ifs
          continue;
        }

        // if it's a down corner tile, either left or right
        if((x == 0 && y == this.fGrid.rows-1) || (x == this.fGrid.columns && y == this.fGrid.rows)){
          if(x == 0)
            this.fGrid.FieldGrid[x][y] == map.borderDownLeft;
          else
            this.fGrid.FieldGrid[x][y] == map.borderDownRight;
          continue;
        }

        // if it's the upper row, but not the corners
        if((x > 0 || x < this.fGrid.columns) && y == 0){
          this.fGrid.FieldGrid[x][y] == map.borderUpMid;
          continue;
        }

        // if it's the lower row, but not the corners
        if((x > 0 || x < this.fGrid.columns) && y == this.fGrid.rows-1){
          this.fGrid.FieldGrid[x][y] == map.borderUpMid;
          continue;
        }

        // if it's the left/right border but not of the first/last row. weirdest-ass if ever. might as well do ML with this shit
        if(
          (x == 0 && (y > 0 || y < this.fGrid.rows-1)) // x is 0, so its left border, but y is neither 0 (first row) or the last row
          || // or
          (x == this.fGrid.rows-1 && (y > 0 || y < this.fGrid.rows-1)) // same as above, just this time, it's the right border 
          ){
              if(x == 0) // left border
                this.fGrid.FieldGrid[x][y] == map.borderLeft;
              else // right border
                this.fGrid.FieldGrid[x][y] == map.borderRight;
              continue; // just in case
          }
        
        // if you rechead this point, it means you not anywhere in the upper row, lower row, first column nor last column
        // so go full yolo and pick a tile randomly from the floor tiles.

      }

    }
    
    
    
  }

  ngOnInit(): void {
  }

}
