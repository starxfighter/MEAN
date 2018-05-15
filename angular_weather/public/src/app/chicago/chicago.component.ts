import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-chicago',
  templateUrl: './chicago.component.html',
  styleUrls: ['./chicago.component.css']
})
export class ChicagoComponent implements OnInit {
  humidity = 0;
  avgtemp = 0;
  maxtemp = 0;
  mintemp = 0;
  status = '';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getChicago();
  }

  getChicago() {
    const observable = this._httpService.getChicago();
    observable.subscribe(data => {
      this.humidity = data['main'].humidity;
      this.avgtemp = Math.floor(1.8 * ((data['main'].temp) - 273) + 32);
      this.maxtemp = Math.floor(1.8 * ((data['main'].temp_max) - 273) + 32);
      this.mintemp = Math.floor(1.8 * ((data['main'].temp_min) - 273) + 32);
      this.status = data['weather'][0].description;
    });
  }

}
