import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:7068/api/"

  constructor(private httpClient:HttpClient) { }

  getCarsDto():Observable<ListResponseodel<CarDetail>>{
    let newPath = this.apiUrl + "cars/cardto"
    return this.httpClient.get<ListResponseodel<CarDetail>>(newPath)
  }

  getCarsByBrand(brandId:number):Observable<ListResponseodel<CarDetail>>{
    let newPath = this.apiUrl + "cars/cardtobrandid?id="+ brandId
    return this.httpClient.get<ListResponseodel<CarDetail>>(newPath);
  }

  getCarsByColor(colorId:number):Observable<ListResponseodel<CarDetail>>{
    let newPath = this.apiUrl + "cars/cardtocolorid?id=" + colorId
    return this.httpClient.get<ListResponseodel<CarDetail>>(newPath);
  }
}
