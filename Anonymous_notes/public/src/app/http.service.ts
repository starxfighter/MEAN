import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getNotes();
   }

   getNotes() {
     console.log('Getting all notes');
     return this._http.get('/all');
   }

   addNote(newnote) {
     console.log('Adding a new note');
     console.log('new note infor', newnote);
     return this._http.post('/new', newnote);
   }
}
