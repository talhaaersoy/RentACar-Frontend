import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarDetail } from 'src/app/models/carDetail';
import { CarImage } from 'src/app/models/carImage';
import { CarWithImagesService } from 'src/app/services/car-with-images.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars:CarDetail[] =[];
  dataLoaded = false;
  carImages:CarImage[]=[];
  constructor(private carService:CarService,
    private activatedRoutes:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoutes.params.subscribe(params=>{
      if(params["brandId"]){
        this.getCarsByBrand(params["brandId"])
      }
      else if(params["colorId"]){
       
        this.getCarsByColor(params["colorId"])
      }
      else{
        this.getCars();
      }
    })
  }
  getCars() {
    this.carService.getCars().subscribe(response =>{
      this.cars = response.data;
      this.dataLoaded = true;
    }) 
  }
  getCarsByBrand(brandId:number){
      this.carService.getCarsByBrand(brandId).subscribe(response=>{
        this.cars = response.data;
        this.dataLoaded =true;
      })
  }
  getCarsByColor(colorId:number){
    this.carService.getCarsByColor(colorId).subscribe(response=>{
      
      this.cars = response.data;
      this.dataLoaded = true;
    })
  }



}
