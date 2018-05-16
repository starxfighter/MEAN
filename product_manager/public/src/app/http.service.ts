import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getProducts() {
    return this._http.get('/all');
  }

  displayProduct(id) {
    return this._http.get('/' + id);
  }

  addProduct(newproduct) {
    return this._http.post('/new', newproduct);
  }

  updateProduct(id, updateproduct) {
    return this._http.put('/update/' + id, updateproduct);
  }

  deleteProduct(id) {
    return this._http.delete('/delete/' + id);
  }

  welcome() {
    return this._http.get('/welcome');
  }

  products() {
    return this._http.get('/products');
  }

  add() {
    return this._http.get('/new');
  }

  edit(id) {
    return this._http.get('/edit/' + id);
  }

}
