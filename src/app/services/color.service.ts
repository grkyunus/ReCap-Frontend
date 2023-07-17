import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  apiUrl ="https://localhost:7068/api/"


  constructor(private httpClient:HttpClient) { }

  getColors():Observable<ListResponseodel<Color>>{
    let newPath = this.apiUrl + "colors/getall";
    return this.httpClient.get<ListResponseodel<Color>>(newPath);
  }
  
}
