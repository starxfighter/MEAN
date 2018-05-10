import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getOne();
    this.special();
  }
    getOne() {
      const bulbasaur = this._http.get('https://pokeapi.co/api/v2/pokemon/1/');
      bulbasaur.subscribe(data => console.log('Pokemon data', data));
    }

    special() {
      const all = this._http.get('https://pokeapi.co/api/v2/ability/34/');
      all.subscribe(data => {
        console.log('All Pokemon data', data);
        console.log('There are ' + data['pokemon'].length + ' with the ' + data['name']);
      }
      );
    }
}
