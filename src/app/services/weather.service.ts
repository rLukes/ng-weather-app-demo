import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

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

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) {}
}
