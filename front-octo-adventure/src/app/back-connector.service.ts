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
   * Sends a get request at the GetFieldMatrixURL property set
   * in the map.json.
   */
  public getFieldMatrix():Observable<ResponseWrapper<PlayFieldGrid>>{
    return this.client.get<ResponseWrapper<PlayFieldGrid>>(tileMapping.GetFieldMatrixURL);
  }
}
