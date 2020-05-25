import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent implements OnInit {

  response: any;
  cityInput: string;

  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
  }

  getForecast(){
    this.meteoService.getForecast(this.cityInput).subscribe(
      data => {
        console.log(data);
        this.response = data;
        console.log(this.response);

      },
      err => console.log(err)
    );

  }
}
