import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ListResponseodel } from '../models/responseModels/listResponseModel';
import { CarDetail } from '../models/carDetail';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  apiUrl = "https://localhost:7068/api/";

  constructor(private httpClient:HttpClient) { }

  getCars():Observable<ListResponseodel<CarDetail>>{
    let newPath = this.apiUrl + "cars/cardto";
    return this.httpClient.get<ListResponseodel<CarDetail>>(newPath);
  }

  getCustomers():Observable<ListResponseodel<Customer>>{
    let newPath = this.apiUrl + "customers/getall";
    return this.httpClient.get<ListResponseodel<Customer>>(newPath);
  }

  getRentals(){
    let newPath = this.apiUrl + "rentals/rentaldto";
    return this.httpClient.get<ListResponseodel<Rental>>(newPath);
  }


}
