import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-burbank',
  templateUrl: './burbank.component.html',
  styleUrls: ['./burbank.component.css']
})
export class BurbankComponent implements OnInit {
  humidity = 0;
  avgtemp = 0;
  maxtemp = 0;
  mintemp = 0;
  status = '';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getBurbank();
  }

  getBurbank() {
    const observable = this._httpService.getBurbank();
    observable.subscribe(data => {
      this.humidity = data['main'].humidity;
      this.avgtemp = Math.floor(1.8 * ((data['main'].temp) - 273) + 32);
      this.maxtemp = Math.floor(1.8 * ((data['main'].temp_max) - 273) + 32);
      this.mintemp = Math.floor(1.8 * ((data['main'].temp_min) - 273) + 32);
      this.status = data['weather'][0].description;
    });
  }

}
