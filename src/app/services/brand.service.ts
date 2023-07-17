import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  apiUrl ="https://localhost:7068/api/"


  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseodel<Brand>>{
    let newPath = this.apiUrl + "brands/getall";
    return this.httpClient.get<ListResponseodel<Brand>>(newPath);
  }
}
