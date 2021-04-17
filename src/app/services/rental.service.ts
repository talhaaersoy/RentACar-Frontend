import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DataResponseModel } from '../models/dataResponseModel';
import { Rental } from '../models/rental';

@Injectable({
  providedIn: 'root'
})
export class RentalService {
  apiUrl = "https://localhost:44371/api/rentals/getall" 
  constructor(private httpClient:HttpClient) { }
  getRentals():Observable<DataResponseModel<Rental[]>>{
    return this.httpClient.get<DataResponseModel<Rental[]>>(this.apiUrl);
  }
}
