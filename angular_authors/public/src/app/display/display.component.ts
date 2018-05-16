import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  authors: any;
  message: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.authors = [];
    this.message = [];
    this.setPage();
  }

  setPage() {
      const observable = this._httpService.getAuthors();
      observable.subscribe(data => {
        console.log('got our authors', data);
        if (data['error']) {
          this.message.push(data['error'].message);
          console.log('this.message', this.message);
        } else {
          this.authors = data['authors'];
        }
      });
  }

  destroyAuthor(id: String) {
    console.log('id', id);
    const observable = this._httpService.deleteAuthor(id);
    observable.subscribe(data => {
      console.log('Deleted Author', data);
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.setPage();
      }
    });
  }

}
