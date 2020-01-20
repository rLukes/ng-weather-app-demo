import { Injectable } from "@angular/core";

interface ICurrentWeatherData {
  weathter: [
    {
      description: string;
      icon: string;
    }
  ];
  main: {
    temp: number;
  };
  sys: {
    country: string;
  };
  dt: number;
  name: string;
}

@Injectable({
  providedIn: "root"
})
export class WeatherService {}
