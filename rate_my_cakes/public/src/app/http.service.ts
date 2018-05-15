import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getCakes();
   }

   getCakes() {
    console.log('getting all cakes');
    return this._http.get('/all');
   }

   displayCake(id) {
     console.log('getting one cake');
     return this._http.get('/' + id);
   }

   addCake(newcake) {
     console.log('adding a new cake');
     return this._http.post('/new', newcake);
   }

   updateCake(id, updatecake) {
     console.log('updating cake');
     return this._http.put('/update/' + id, updatecake);
   }
}
