import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Brand } from '../models/brand';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class BrandService {
  
  apiUrl ="https://localhost:7068/api/brands/getall"


  constructor(private httpClient:HttpClient) { }

  getBrands():Observable<ListResponseodel<Brand>>{
    return this.httpClient.get<ListResponseodel<Brand>>(this.apiUrl)
  }
}
