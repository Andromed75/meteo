import { Component, OnInit } from '@angular/core';
import { MeteoService } from '../meteo.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  cityInput: string;
  response: any;


  constructor(private meteoService: MeteoService) { }

  ngOnInit(): void {
  }

  getMeteo(){
    this.meteoService.getMeteo(this.cityInput).subscribe(
      data => {
        console.log(data);
        this.response = data;
        console.log(this.response);

      },
      err => console.log(err)
    );

  }


}
