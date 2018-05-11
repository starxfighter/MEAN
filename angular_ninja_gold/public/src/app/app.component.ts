import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  gold = 0;
  messages = [];
  topscore = 0;
  score_id: string;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.topScore();
    this.generateScore();
  }
  farm() {
    const observable = this._httpService.goldFarm();
    observable.subscribe(data => {
      this.gold = this.gold + data['data'].money;
      this.messages.push(data['data'].msg);
      this.updateScore();
    });
  }

  cave() {
    const observable = this._httpService.goldCave();
    observable.subscribe(data => {
      this.gold = this.gold + data['data'].money;
      this.messages.push(data['data'].msg);
      this.updateScore();
    });
  }

  house() {
    const observable = this._httpService.goldHouse();
    observable.subscribe(data => {
      this.gold = this.gold + data['data'].money;
      this.messages.push(data['data'].msg);
      this.updateScore();
    });
  }

  casino() {
    const observable = this._httpService.goldCasino();
    observable.subscribe(data => {
      this.gold = this.gold + data['data'].money;
      this.messages.push(data['data'].msg);
      this.updateScore();
    });
  }
  topScore() {
    const observable = this._httpService.topScore();
    observable.subscribe(data => {
      console.log('topscore', data);
      this.topscore = data['data'].score;
    });
  }
  generateScore() {
    const observable = this._httpService.generateScore();
    observable.subscribe(data => {
      console.log('new score', data);
      this.score_id = data['data']._id;
      console.log('id stored on this load', this.score_id);
    });
  }
  updateScore() {
    const observable = this._httpService.updateScore(this.score_id, this.gold);
    observable.subscribe(data => {
      console.log('Score updated', data);
      this.topScore();
    });
  }
}
