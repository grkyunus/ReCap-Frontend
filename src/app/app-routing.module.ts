import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarDetailComponent},
  {path:"cars/cardto",component:CarDetailComponent},
  {path:"cars/cardtobrandid/:brandId",component:CarDetailComponent},
  {path:"cars/cardtocolorid/:colorId",component:CarDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
