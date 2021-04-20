import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarImage } from '../models/carImage';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarWithImagesService {
  apiUrl = "https://localhost:44371/api/" 
  constructor(private httpClient:HttpClient) { }

  getCarImagesByCarId(carId:number):Observable<DataResponseModel<CarImage[]>>{
    let newPath = this.apiUrl +"carimages/getimagesbycarid?carid="+carId;
    return this.httpClient.get<DataResponseModel<CarImage[]>>(newPath);
  }
}
