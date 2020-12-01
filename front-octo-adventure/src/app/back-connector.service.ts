import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import tileMapping from "../assets/asset-mapping/map.json";
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { ResponseWrapper } from "./models/ResponseWrapper/ResponseWrapper";
import { PlayFieldGrid } from './models/play-field-grid/field-grid-model';


@Injectable({
  providedIn: 'root'
})
export class BackConnectorService {

  constructor( private client : HttpClient ) { }

  /**
   * Gets field matrix by sending a GET request to the back-end URL mapped in the map.json
   * @param rows 
   * @param columns 
   * @returns An Observable of the response mapped to the propper object
   */
  public getFieldMatrix(rows: number, columns: number):Observable<ResponseWrapper<PlayFieldGrid>>{
    return this.client.get<ResponseWrapper<PlayFieldGrid>>(tileMapping.GetFieldMatrixURL+"/"+rows+"/"+columns);
  }
}
