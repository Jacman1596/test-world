import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorldServiceService {

  constructor(private http: HttpClient) { 
  }
  apiURL = 'https://api.worldbank.org/v2/country/'
  getCountryInfo(cName: String){
    const info = this.http.get(this.apiURL + cName +'?format=json')
    return info
  }
}
export class dataCountry{
  countryName!: String;
  capital!: String;
  region!: String;
  incomeLevel!: String;
  longitude!: String;
  latitude!: String;
  
  showInfo(){
    [
      {'Country': this.countryName},
      {'Capital': this.capital},
      {'Region': this.region},
      {'Income Level': this.incomeLevel},
      {'Longitude': this.longitude},
      {'Latidude': this.latitude}
    ]
  }
}