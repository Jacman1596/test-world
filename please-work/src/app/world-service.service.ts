import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldServiceService {

  constructor(private http: HttpClient) { 
  }
  apiURL = 'http://api.worldbank.org/v2/country/'
  getCountryInfo(Name: String){
    const info = this.http.get(this.apiURL + Name +'?format=json')
    return info
  }
}
