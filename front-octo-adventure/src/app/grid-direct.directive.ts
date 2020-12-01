import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import map from "../assets/asset-mapping/map.json";
import { PlayFieldGrid } from './models/play-field-grid/field-grid-model';
import { ResponseWrapper } from './models/ResponseWrapper/ResponseWrapper';

@Directive({
  selector: '[appGridDirect]'
})
export class GridDirectDirective implements OnInit {

  @Input() fieldGrid : string[][];
  @Input() height: number;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  /**
   * On initialization, generates the html to display the received field grid. It's a mat-grid-list in which
   * each row is in it's own div, so the vertical size can be set according to the tile size. Each individual tile
   * is a child img node to a mat-grid-tile element. If the field grid is bigger than the actual matrix, it stops
   * at the display size max index. If it's smaller, then the actual matrix is padded with empty tiles.
   * 
   * If there is a Tile that is not properly mapped, then an exception is thrown.
   */
  ngOnInit(): void {

    for(let i = 0; i < map.displayRows; i++){

      let div = this.renderer.createElement("div");
      // set vertical size of the div, otherwise a weird ass space between rows appear
      this.renderer.setAttribute(div, "style", "height: SIZEpx;".replace("SIZE",this.height.toString()));

      if(this.fieldGrid[i] === undefined){
        this.fieldGrid.push([]);
      }

      for(let j = 0; j < map.displayCols; j++){

        let tile = this.renderer.createElement("mat-grid-tile");
        let img = this.renderer.createElement("img");

        if(this.fieldGrid[i][j] === undefined){
          this.fieldGrid[i].push("blankTile");
        }
        
        // check that the key from the field grid actually maps to the json map
        if(this.isKeyOf(map, this.fieldGrid[i][j]) || this.fieldGrid[i][j] == map.blankTile){

          // set source attr
          this.renderer.setAttribute(img, "src", map[this.fieldGrid[i][j]]);

          //append img tag to mat-grid-tile
          this.renderer.appendChild(tile, img);
          // append mat-grid-tile to native element (that is, the parent div in this case)
          this.renderer.appendChild(div, tile);

        }
        else{
          throw new Error('One of your mappings in the '+
          'back end cannot be found in map.json. This is NOT the droid you are looking for:"'+this.fieldGrid[i][j]+'"');
        }

      }

      this.renderer.appendChild(this.elementRef.nativeElement, div);
    }

  }
  /**
   * Custom TypeGuard. Checks wether the received possibleKey is actually a key of the received object T.
   * More of this in: https://stackoverflow.com/questions/53519513/in-typescript-how-to-import-json-and-dynamically-lookup-by-key
   * @template T
   * @param obj 
   * @param possibleKey 
   * @returns key of (true or false)
   */
  private isKeyOf<T extends object>(obj: T, possibleKey: keyof any): possibleKey is keyof T{

    return possibleKey in obj;
  }



}
