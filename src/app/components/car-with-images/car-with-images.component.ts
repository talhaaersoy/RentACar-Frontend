import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarWithImagesService } from 'src/app/services/car-with-images.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car-with-images',
  templateUrl: './car-with-images.component.html',
  styleUrls: ['./car-with-images.component.css']
})
export class CarWithImagesComponent implements OnInit {

  constructor(private carService:CarService,
    private carImageService:CarWithImagesService,
    private activatedRoute:ActivatedRoute) { }
    cars:CarDetail[] =[];
    dataLoaded = false;
    carImages:CarImage[]=[];
  ngOnInit(): void {  
      this.activatedRoute.params.subscribe(params=>{
        if (params["carId"]) {
          this.getCarByCarId(params["carId"]);
          this.getCarImagesByCarId(params["carId"]);
        } 
      })
  }
  getCarByCarId(carId:number){
    this.carService.getCarByCarId(carId).subscribe(response=>{
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages = response.data;
      this.dataLoaded = true;
    })
  }
}
