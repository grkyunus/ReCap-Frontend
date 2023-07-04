import { Component } from '@angular/core';
import { CarDetail } from 'src/app/models/carDetail';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  carsdto:CarDetail[] = [ ];
  dataLoaded = false;

  constructor(private carDetailService:CarDetailService) { }

  ngOnInit(): void{
    this.getCarsDto();
  }

  getCarsDto(){
  this.carDetailService.getCarsDto().subscribe(response => {
    this.carsdto = response.data
    this.dataLoaded=true;
  })
  }
}
