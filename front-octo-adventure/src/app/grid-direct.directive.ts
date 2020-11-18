import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';
import map from "../assets/asset-mapping/map.json";

@Directive({
  selector: '[appGridDirect]'
})
export class GridDirectDirective implements OnInit {

  @Input() fieldGrid : string[][];
  @Input() height: number;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  /**
   * On call, generates the html to display the field grid. It's a mat-grid-list in which
   * each row is in it's own div, so the vertical size can be set according to the tile size. Each individual tile
   * is a child img node to a mat-grid-tile element. If the field grid is bigger than the actual matrix, it stops
   * at the display size max index. If it's smaller, then the actual matrix is padded with empty tiles.
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
          this.fieldGrid[i].push(map.blankTile);
        }
          
        // set source attr
        this.renderer.setAttribute(img, "src", this.fieldGrid[i][j]);
        

        //append img tag to mat-grid-tile
        this.renderer.appendChild(tile, img);
        // append mat-grid-tile to native element (that is, the parent div in this case)
        this.renderer.appendChild(div, tile);

      }

      this.renderer.appendChild(this.elementRef.nativeElement, div);
    }

    

  }



}
