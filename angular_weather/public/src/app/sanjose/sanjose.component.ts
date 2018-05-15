import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sanjose',
  templateUrl: './sanjose.component.html',
  styleUrls: ['./sanjose.component.css']
})
export class SanjoseComponent implements OnInit {
  humidity = 0;
  avgtemp = 0;
  maxtemp = 0;
  mintemp = 0;
  status = '';
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getSanjose();
  }

  getSanjose() {
    const observable = this._httpService.getSanjose();
    observable.subscribe(data => {
      this.humidity = data['main'].humidity;
      this.avgtemp = Math.floor(1.8 * ((data['main'].temp) - 273) + 32);
      this.maxtemp = Math.floor(1.8 * ((data['main'].temp_max) - 273) + 32);
      this.mintemp = Math.floor(1.8 * ((data['main'].temp_min) - 273) + 32);
      this.status = data['weather'][0].description;
    });
  }

}
