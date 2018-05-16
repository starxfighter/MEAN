import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-mine',
  templateUrl: './mine.component.html',
  styleUrls: ['./mine.component.css']
})
export class MineComponent implements OnInit {
  mine: any;
  msg: any;
  lmsg: any;
  money: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.mine = {answer: ''};
    this.msg = '';
    this.lmsg = '';
    this.money = 0;
  }

  mineCoins() {
    if (this.mine['answer'] === 'brown') {
      this._httpService.addToMoney(1);
      this._httpService.addToDollar(1);
      this.lmsg = {path: 'mine', coins: 1, value: 1};
      this._httpService.addToLedger(this.lmsg);
      this.money = this._httpService.shareMoney();
      this.msg = 'Great Job. You now have ' + this.money + ' coins';
    } else {
      this.msg = 'Nice Try. No luck.';
    }
  }

}
