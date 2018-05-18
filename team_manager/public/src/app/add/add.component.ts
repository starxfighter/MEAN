import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  newplayer: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newplayer = {name: '', position: ''};
    this.message = [];
  }

  addNewPlayer() {
    console.log('newplayer', this.newplayer);
    const observable = this._httpService.addPlayer(this.newplayer);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        return this.router.navigate(['/home/players/list']);
      }
    });
  }

}
