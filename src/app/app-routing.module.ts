import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RoutingPageComponent } from './routing-page/routing-page.component';
import { WeatherDetailsComponent } from './weather-details/weather-details.component';


const routes: Routes = [
  {path:'',component:WeatherDetailsComponent},
  {path:"routing", component:RoutingPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

