import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    this.displayTask('5af37b1e8129fb324973c769');
   }

   getTasks() {
    // our http response is an Observable, store it in a variable
    const tempObservable = this._http.get('/all');
    tempObservable.subscribe(data => console.log('Got our tasks!', data));
  }

  displayTask(id) {
    const tempObservable = this._http.get('/' + id);
    tempObservable.subscribe(data => console.log('Got single task', data));
  }
}


