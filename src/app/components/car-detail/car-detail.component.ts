import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Brand } from 'src/app/models/brand';
import { CarDetail } from 'src/app/models/carDetail';
import { Color } from 'src/app/models/color';
import { CarDetailService } from 'src/app/services/car-detail.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  carsdto:CarDetail[] = [ ];
  brands:Brand[] = [];
  colors:Color[] = [];
  dataLoaded = false;

  constructor(private carDetailService:CarDetailService, private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void{
    this.activatedRoute.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if (params["colorId"]){
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCarsDto();
      }
    });
    
  }

  getCarsDto(){
  this.carDetailService.getCarsDto().subscribe(response => {
    this.carsdto = response.data
    this.dataLoaded=true;
  });
  }

  getCarsByBrand(brandId:number){
    this.carDetailService.getCarsByBrand(brandId).subscribe(response=>{
    this.carsdto = response.data
    this.dataLoaded = true;
    });
  }

  getCarsByColor(colorId:number){
    this.carDetailService.getCarsByColor(colorId).subscribe(response=>{
    this.carsdto = response.data
    this.dataLoaded = true;
    });
  }

}
