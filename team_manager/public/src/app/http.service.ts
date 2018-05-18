import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getPlayers() {
    return this._http.get('/all');
  }

  displayPlayer(id) {
    return this._http.get('/' + id);
  }

  addPlayer(newplayer) {
  return this._http.post('/new', newplayer);
  }

  updatePlayer(id, updateplayer) {
    return this._http.put('/update/' + id, updateplayer);
  }

  deletePlayer(id) {
    return this._http.delete('/delete/' + id);
  }

  home() {
    return this._http.get('/home');
  }

  players() {
    return this._http.get('/player');
  }

  add() {
    return this._http.get('/new');
  }

  list() {
    return this._http.get('/list');
  }

  status() {
    return this._http.get('/status');
  }

  game(id) {
    return this._http.get('/game/' + id);
  }
}
