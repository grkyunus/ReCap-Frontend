import { Component } from '@angular/core';
import { Car } from 'src/app/models/car';
import { CarDetail } from 'src/app/models/carDetail';
import { Customer } from 'src/app/models/customer';
import { Rental } from 'src/app/models/rental';
import { CarDetailService } from 'src/app/services/car-detail.service';
import { CustomerService } from 'src/app/services/customer.service';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent {

  carsdto:CarDetail[] =[]
  customers:Customer[] = []
  rentals:Rental[] = []
  dataLoaded = false;
  currentAll: Car | null ;
  // currentCustomer: Customer | null;
  // currentRental: Rental | null;

  constructor(private carDetailService:CarDetailService, private customerService:CustomerService, private rentalService:RentalService) {}

  ngOnInit():void{
    this.getCars();
    this.getCustomers();
    this.getRentals();
  }

  setCurrentAll(){
    this.currentAll = null;
  }

  getCars(){
    this.carDetailService.getCarsDto().subscribe(response => {
    this.carsdto = response.data
    this.dataLoaded=true;
    })
  }

  getCustomers(){
    this.customerService.getCustomers().subscribe(response=>{
    this.customers=response.data
    this.dataLoaded=true;
    })
  }

  getRentals(){
    this.rentalService.getRentals().subscribe(response=>{
    this.rentals=response.data
    this.dataLoaded=true;
    })
  }

  getAllClass(){
    if(!this.currentAll){
      return "list-group-item active"
    }
    else{
      return "list-group-item"
    }
  }

}
