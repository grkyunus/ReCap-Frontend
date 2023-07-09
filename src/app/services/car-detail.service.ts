import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:7068/api/cars/cardto"

  constructor(private httpClient:HttpClient) { }

  getCarsDto():Observable<ListResponseodel<CarDetail>>{
    return this.httpClient.get<ListResponseodel<CarDetail>>(this.apiUrl)
  }
}
