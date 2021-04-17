import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CarDetail } from '../models/carDetail';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  apiUrl = "https://localhost:44371/api/cars/getcarsdetails" 
  constructor(private httpClient:HttpClient ) {}

  getCars() :Observable<DataResponseModel<CarDetail[]>> {
    return this.httpClient.get<DataResponseModel<CarDetail[]>>(this.apiUrl);
  }
}
