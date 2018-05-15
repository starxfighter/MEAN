import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getSeattle() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Seattle&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

  getSanjose() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=San Jose&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

  getBurbank() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Burbank&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

  getDallas() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Dallas&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

  getDC() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Washington DC.&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

  getChicago() {
    return this._http.get('https://api.openweathermap.org/data/2.5/weather?q=Chicago&APPID=0bbe9917a892fe33f9180e25eda732ca');
  }

}
