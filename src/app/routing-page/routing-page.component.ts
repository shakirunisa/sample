import { AfterViewInit, Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { ApiService } from '../weather-api.service';
import { WeatherDetailsComponent } from '../weather-details/weather-details.component';

@Component({
  selector: 'app-routing-page',
  templateUrl: './routing-page.component.html',
  styleUrls: ['./routing-page.component.css']
})
export class RoutingPageComponent implements OnInit,AfterViewInit {
  weatherDetails: any;
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.weatherDetails = JSON.parse(localStorage.getItem('mydetails'));
    console.log(this.weatherDetails)
  }
  ngAfterViewInit() {
  }

}
