import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getTasks();
    // this.displayTask('id');
   }

   getTasks() {
     // lines ar removed so that observable is returned to where it is called
    // our http response is an Observable, store it in a variable
    // const tempObservable = this._http.get('/all');
    // tempObservable.subscribe(data => console.log('Got our tasks!', data));
    // Return the observable to whereever the getTasks method was invoked
    console.log('Getting all tasks');
    return this._http.get('/all');
  }

  displayTask(id) {
    // const tempObservable = this._http.get('/' + id);
    // tempObservable.subscribe(data => console.log('Got single task', data));
    console.log('getting one task');
    console.log('http id', id);
    return this._http.get('/' + id);
  }

  addTask(newtask) {
    console.log('Adding a new task');
    console.log('newtask information', newtask);
    return this._http.post('/new', newtask);
  }

  updateTask(id, updatetask) {
    console.log('Updating a task');
    console.log('incoming id', id);
    console.log('updatetask information', updatetask);
    return this._http.put('/update/' + id, updatetask);
  }

  destroyTask(id) {
    console.log('Destroying task');
    console.log('destroy id', id);
    return this._http.delete('/delete/' + id);
  }

}


