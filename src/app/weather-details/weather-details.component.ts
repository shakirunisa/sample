import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../weather-api.service';

@Component({
  selector: 'app-weather-details',
  templateUrl: './weather-details.component.html',
  styleUrls: ['./weather-details.component.css']
})
export class WeatherDetailsComponent implements OnInit {
  weatherList: string[];
  londonDetails: { name: any; temp: any; sunrise: any; sunset: any;sealevel: any };
  berlinDetails: { name: any; temp: any; sunrise: any; sunset: any;sealevel: any  };
  madridDetails: { name: any; temp: any; sunrise: any; sunset: any;sealevel: any  };
  parisDetails: { name: any; temp: any; sunrise: any; sunset: any;sealevel: any  };
  romeDetails: { name: any; temp: any; sunrise: any; sunset: any; sealevel: any };
  allCititiesdetails= [];
  constructor(private router:Router, private service:ApiService) { }

  ngOnInit(): void {
    this.weatherList = ["City Name","Temparature","SunRise time","SunSet Time"]
    this.service.getWeatherDetailsOfLondon().subscribe(data => {
     this.londonDetails = {
       name :data["name"],
       temp:data["main"].temp,
       sunrise:data["sys"].sunrise,
       sunset:data["sys"].sunset,
       sealevel:data["main"].sea_level
     }
     console.log(data)
     this.allCititiesdetails.push(this.londonDetails)
    })
    this.service.getWeatherDetailsOfBerlin().subscribe(data => {
      this.berlinDetails = {
        name :data["name"],
        temp:data["main"].temp,
        sunrise:data["sys"].sunrise,
        sunset:data["sys"].sunset,
        sealevel:data["main"].sea_level
      }
      this.allCititiesdetails.push(this.berlinDetails)
    })
    this.service.getWeatherDetailsOfMadrid().subscribe(data => {
      this.madridDetails = {
        name :data["name"],
        temp:data["main"].temp,
        sunrise:data["sys"].sunrise,
        sunset:data["sys"].sunset,
        sealevel:data["main"].sea_level
      }
      this.allCititiesdetails.push(this.madridDetails)
    })
    this.service.getWeatherDetailsOfParis().subscribe(data => {
      this.parisDetails = {
        name :data["name"],
        temp:data["main"].temp,
        sunrise:data["sys"].sunrise,
        sunset:data["sys"].sunset,
        sealevel:data["main"].sea_level
      }
      this.allCititiesdetails.push(this.parisDetails)
    })
    this.service.getWeatherDetailsOfRome().subscribe(data => {
      this.romeDetails = {
        name :data["name"],
        temp:data["main"].temp,
        sunrise:data["sys"].sunrise,
        sunset:data["sys"].sunset,
        sealevel:data["main"].sea_level
      }
      this.allCititiesdetails.push(this.romeDetails)
    })
    console.log(this.allCititiesdetails)
  }
  weatherCondition(event){
    localStorage.setItem('mydetails', JSON.stringify(event));
    this.router.navigateByUrl('/routing')
  }
}
