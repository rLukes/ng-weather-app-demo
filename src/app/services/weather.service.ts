import { environment } from "./../../environments/environment";

import { ICurrentWeather } from "./../interfaces";
import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

interface ICurrentWeatherData {
  weather: [
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

  getCurrentWeather(
    city: string,
    country: string
  ): Observable<ICurrentWeather> {
    return this.http
      .get<ICurrentWeatherData>(
        `${environment.baseUrl}api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${environment.appId}`
      )
      .pipe(map(data => this.transformToICurrentWeather(data)));
  }
  private transformToICurrentWeather(data: ICurrentWeatherData) {
    // console.log(data);
    const weather: ICurrentWeather = {
      city: data.name,
      country: data.sys.country,
      date: new Date(),
      image: `http://openweathermap.org/img/w/${data.weather[0].icon}.png`,
      temperature: data.main.temp,
      description: data.weather[0].description
    };
    return weather;
  }
}
