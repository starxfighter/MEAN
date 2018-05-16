import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAuthors() {
    return this._http.get('/all');
  }

  displayAuthor(id) {
    return this._http.get('/' + id);
  }

  addAuthor(newauthor) {
    return this._http.post('/new', newauthor);
  }

  updateAuthor(id, updateauthor) {
    return this._http.put('/update/' + id, updateauthor);
  }

  deleteAuthor(id) {
    console.log('calling delete');
    return this._http.delete('/delete/' + id);
  }

  display() {
    return this._http.get('/display');
  }

  add() {
    return this._http.get('/add');
  }

  edit(id) {
    return this._http.get('/details/' + id);
  }
}
