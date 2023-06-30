import { Injectable } from '@angular/core';
import { CarResponseModel } from '../models/responseModels/carResponseModel';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:7068/api/cars/cardto"


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<CarResponseModel>{
   return this.httpClient.get<CarResponseModel>(this.apiUrl)
  }
}
