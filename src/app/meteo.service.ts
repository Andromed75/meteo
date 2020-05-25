import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MeteoService {

  constructor(private http: HttpClient) { }


  getMeteo(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/weather?q=${city},fr&units=metric&appid=550b5fa13027ff2c95a61aa84de8cfb8`);
  }

  getForecast(city: string) {
    return this.http.get(`https://api.openweathermap.org/data/2.5/forecast?q=${city},fr&units=metric&appid=550b5fa13027ff2c95a61aa84de8cfb8`);
  }

}