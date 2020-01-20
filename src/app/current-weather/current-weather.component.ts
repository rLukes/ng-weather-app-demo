import { ICurrentWeather } from "./../interfaces";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-current-weather",
  templateUrl: "./current-weather.component.html",
  styleUrls: ["./current-weather.component.scss"]
})
export class CurrentWeatherComponent implements OnInit {
  current: ICurrentWeather;
  constructor() {
    this.current = {
      city: "Paris",
      country: "France",
      temperature: 25,
      date: new Date(),
      image: "assets/img/sunny1.png",
      description: "sunny"
    } as ICurrentWeather;
  }

  ngOnInit() {}
}
