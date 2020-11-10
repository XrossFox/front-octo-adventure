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


    for(let i = 0; i < 5; i++){
      this.fGrid.FieldGrid.push([]);

      for(let j = 0; j < 5; j++){
        if(i == 0)
          this.fGrid.FieldGrid[i][j] = "assets/pics/catgirl2.jpg";  
        else
          this.fGrid.FieldGrid[i][j] = "assets/pics/catgirl2.jpg";  
      }
    }

    console.log(this.fGrid.FieldGrid);

  }

  ngOnInit(): void {
  }

}
