import { Injectable } from '@angular/core';
import { CarDetail } from '../models/carDetail';
import { HttpClient } from '@angular/common/http';
import { CarDetailResponseModel } from '../models/responseModels/carDetailResponseModel';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarDetailService {

  apiUrl = "https://localhost:7068/api/cars/cardto"

  constructor(private httpClient:HttpClient) { }

  getCarsDto():Observable<CarDetailResponseModel>{
    return this.httpClient.get<CarDetailResponseModel>(this.apiUrl)
  }
}
