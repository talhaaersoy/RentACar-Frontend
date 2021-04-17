import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Color } from '../models/color';
import { DataResponseModel } from '../models/dataResponseModel';

@Injectable({
  providedIn: 'root'
})
export class ColorService {
  apiUrl = "https://localhost:44371/api/colors/getall" 
  constructor(private httpClient:HttpClient) { }
  getColors() : Observable<DataResponseModel<Color[]>>{
      return this.httpClient.get<DataResponseModel<Color[]>>(this.apiUrl);
  }
}
