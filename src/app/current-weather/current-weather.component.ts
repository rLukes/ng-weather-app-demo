import { WeatherService } from "./../services/weather.service";
import { ICurrentWeather } from "./../interfaces";
import { Component, OnInit } from "@angular/core";
import { map } from "rxjs/operators";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"]
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor(private ws: WeatherService) {
    this.current = {
      city: "Paris",
      country: "France",
      temperature: 25,
      date: new Date(),
      image: "assets/img/sunny1.png",
      description: "sunny"
    } as ICurrentWeather;
  }

  ngOnInit() {
    this.ws.getCurrentWeather("London", "uk").subscribe(data => {
      this.current = data;
    });
  }
}
