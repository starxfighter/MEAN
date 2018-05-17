import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  notes = [];
  newnote: any;
  constructor(private _httpService: HttpService) {}

  ngOnInit() {
    this.newnote = {description: ''};
    this.getNotes();
  }

  getNotes() {
    const observable = this._httpService.getNotes();
    observable.subscribe(data => {
      console.log('Got our notes', data);
      this.notes = data['notes'];
    });
  }

    addNewNote() {
      console.log('newnote', this.newnote);
      const observable = this._httpService.addNote(this.newnote);
      observable.subscribe(data => {
        console.log('add task response', data);
      });
      this.getNotes();
    }
}
