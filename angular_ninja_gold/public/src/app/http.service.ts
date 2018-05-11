import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
}

  goldFarm() {
    return this._http.get('/farm');
  }

  goldHouse() {
    return this._http.get('/house');
  }

  goldCave() {
    return this._http.get('/cave');
  }

  goldCasino() {
    return this._http.get('/casino');
  }

  topScore() {
  return this._http.get('http://999.999.9.999:5454/scores/top');
  }

  generateScore() {
    return this._http.get('http://999.999.8.999:5454/scores/new');
  }
  updateScore(score_id, gold) {
    return this._http.get('http://999.999.9.999:5454/scores/' + score_id + '/put/' + gold);
  }
}
