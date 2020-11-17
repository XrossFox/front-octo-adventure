import { Directive, Renderer2, ElementRef, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appGridDirect]'
})
export class GridDirectDirective implements OnInit {

  @Input() fieldGrid : string[][];
  @Input() height: number;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) { }

  /**
   *     appGridDirect [fieldGrid]="fGrid.FieldGrid"
   * On init creates the mat-grid-tiles dynamically accordingly to the received field grid array
   * Each mat-grid-tile has a img tag with the actual image that is the tile.
   */
  ngOnInit(): void {

    for(let i = 0; i < this.fieldGrid.length; i++){

      let div = this.renderer.createElement("div");
      // set vertical size of the div, otherwise a weird ass space between rows appear
      this.renderer.setAttribute(div, "style", "height: SIZEpx;".replace("SIZE",this.height.toString()));

      for(let j = 0; j < this.fieldGrid[i].length; j++){

        let tile = this.renderer.createElement("mat-grid-tile");
        let img = this.renderer.createElement("img");
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
