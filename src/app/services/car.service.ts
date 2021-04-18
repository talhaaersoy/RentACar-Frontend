import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44371/api/" 
  constructor(private httpClient:HttpClient ) {}

  getCars() :Observable<DataResponseModel<CarDetail[]>> {
    let newPath = this.apiUrl+"cars/getcarsdetails"
    return this.httpClient.get<DataResponseModel<CarDetail[]>>(newPath);
  }
  getCarsByBrand(brandId:number):Observable<DataResponseModel<CarDetail[]>>{
    let newPath = this.apiUrl+"cars/getcarsbybrandid?brandId="+brandId;
    return this.httpClient.get<DataResponseModel<CarDetail[]>>(newPath);
  }
  getCarsByColor(colorId:number):Observable<DataResponseModel<CarDetail[]>>{
    let newPath = this.apiUrl+"cars/getcarsbycolorid?colorId="+colorId;
    return this.httpClient.get<DataResponseModel<CarDetail[]>>(newPath);
  }
}
