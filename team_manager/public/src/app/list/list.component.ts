import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  players: any;
  message: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.players = [];
    this.message = [];
    this.setPage();
  }

  setPage() {
    const observable = this._httpService.getPlayers();
    observable.subscribe(data => {
      console.log('got our players', data);
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.players = data['players'];
      }
    });
  }

  destroyProduct(id: String) {
    console.log('id', id);
    const observable = this._httpService.deletePlayer(id);
    observable.subscribe(data => {
      console.log('Deleted Player', data);
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.setPage();
      }
    });
  }

}
