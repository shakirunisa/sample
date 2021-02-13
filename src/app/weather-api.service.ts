import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private httpClient: HttpClient) { }

    public getWeatherDetailsOfLondon() {
        return this.httpClient.get(`http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517`);
    }
    public getWeatherDetailsOfBerlin() {
        return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=Berlin,Germany&appid=3d8b309701a13f65b660fa2c64cdc517")
    }
    public getWeatherDetailsOfMadrid() {
        return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=Madrid,Spain&appid=3d8b309701a13f65b660fa2c64cdc517")
    }
    public getWeatherDetailsOfRome() {
        return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=Rome,Italy&appid=3d8b309701a13f65b660fa2c64cdc517")
    }
    public getWeatherDetailsOfParis() {
        return this.httpClient.get("http://api.openweathermap.org/data/2.5/weather?q=Paris,France&appid=3d8b309701a13f65b660fa2c64cdc517")
    }

   get weatherDetails(): string {
       return this._weatherDetails.getValue();
   }
   set weatherDetails(service:string){
       this._weatherDetails.next(service)
   }
   _weatherDetails : BehaviorSubject<string> = new BehaviorSubject<string>(null) 
  

}