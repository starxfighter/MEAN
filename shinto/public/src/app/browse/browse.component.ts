import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-browse',
  templateUrl: './browse.component.html',
  styleUrls: ['./browse.component.css']
})
export class BrowseComponent implements OnInit {
  ledge: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.ledge = [];
    this.setPage();
  }

  setPage() {
  this.ledge = this._httpService.shareLedger();
  console.log(this.ledge);
  }

}
