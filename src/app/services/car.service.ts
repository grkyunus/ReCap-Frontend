import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl ="https://localhost:7068/api/cars/cardto"


  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseodel<Car>>{
   return this.httpClient.get<ListResponseodel<Car>>(this.apiUrl)
  }
}
