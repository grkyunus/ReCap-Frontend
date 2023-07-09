import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { ListResponseodel } from '../models/responseModels/listResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  apiUrl ="https://localhost:7068/api/customers/getall"

  constructor(private httpClient:HttpClient) { }

  getCustomers():Observable<ListResponseodel<Customer>>{
    return this.httpClient.get<ListResponseodel<Customer>>(this.apiUrl)
  }
}
