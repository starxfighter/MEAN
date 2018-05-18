import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-game3',
  templateUrl: './game3.component.html',
  styleUrls: ['./game3.component.css']
})
export class Game3Component implements OnInit {
  gid: String;
  id: String;
  status: String;
  updateplayer: any;
  players: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.gid = this.route.snapshot.params.id;
    this.players = [];
    this.updateplayer = {game1status: '', game2status: '', game3status: ''};
    this.status = 'Undecided';
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

  updatePlayer(id: String, status: String) {
    this.gid = this.route.snapshot.params.id;
    console.log('update id', id);
    console.log('game id', this.gid);
    console.log(typeof(this.gid));
    console.log('status', status);
    if (this.gid === '1') {
      this.updateplayer.game1status = status;
    } else if (this.gid === '2') {
      this.updateplayer.game2status = status;
    } else {
      this.updateplayer.game3status = status;
    }
    console.log('update data', this.updateplayer);
    const observable = this._httpService.updatePlayer(id, this.updateplayer);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        console.log('update product response', data);
        this.setPage();
        // return this.router.navigate(['/home/status/game/' + this.gid]);
      }
    });
  }

}
