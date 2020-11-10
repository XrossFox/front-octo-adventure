import { Component, OnInit } from '@angular/core';
import { PlayFieldGrid } from '../models/play-field-grid/field-grid-model';

@Component({
  selector: 'app-play-field-grid',
  templateUrl: './play-field-grid.component.html',
  styleUrls: ['./play-field-grid.component.css']
})
export class PlayFieldGridComponent implements OnInit {

  fGrid: PlayFieldGrid;
  public something: string = "assets/pics/catgirl2.jpg";

  constructor() { 
    this. fGrid = new PlayFieldGrid();
    this.fGrid.columns = 4;
    this.fGrid.rows = 6;

    for(let i = 0; i < this.fGrid.rows; i++){
      this.fGrid.FieldGrid.push([]);

      for(let j = 0; j < this.fGrid.columns; j++){
        if(i == 0)
          this.fGrid.FieldGrid[i][j] = "assets/pics/catgirl2.jpg";  
        else
          this.fGrid.FieldGrid[i][j] = "assets/pics/catgirl.png";  
      }
    }

    console.log(this.fGrid.FieldGrid);

  }

  ngOnInit(): void {
  }

}
