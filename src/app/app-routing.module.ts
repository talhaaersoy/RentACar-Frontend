import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarWithImagesComponent } from './components/car-with-images/car-with-images.component';
import { CarComponent } from './components/car/car.component';

const routes: Routes = [
  {path:"",pathMatch:"full",component:CarComponent},
  {path:"cars",component:CarComponent},
  {path:"cars/brand/:brandId",component:CarComponent},
  {path:"cars/color/:colorId",component:CarComponent},
  {path:"cars/car-with-images/:carId",component:CarWithImagesComponent},
  {path:"cars/brand/car-with-images/:carId",component:CarWithImagesComponent},
  {path:"cars/color/car-with-images/:carId",component:CarWithImagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
