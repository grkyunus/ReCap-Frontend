import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseodel } from '../models/responseModels/listResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {

  apiUrl="https://localhost:7068/api/rentals/rentaldto"

  constructor(private httpClient:HttpClient) { }

  getRentals():Observable<ListResponseodel<Rental>>{
    return this.httpClient.get<ListResponseodel<Rental>>(this.apiUrl)
  }
}
