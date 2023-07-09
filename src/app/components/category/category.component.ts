import { Component } from '@angular/core';
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

  constructor(private carDetailService:CarDetailService, private customerSerivce:CustomerService, private rentalService:RentalService) {}

  ngOnInit():void{

  }

  getCars(){
    this.carDetailService.getCarsDto().subscribe(response => {
    this.carsdto = response.data
    this.dataLoaded=true;
    })
  }

  getCustomers(){

  }

  getRentals(){

  }

}
