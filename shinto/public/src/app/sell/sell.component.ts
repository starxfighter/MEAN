import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-sell',
  templateUrl: './sell.component.html',
  styleUrls: ['./sell.component.css']
})
export class SellComponent implements OnInit {
  buy: any;
  msg: any;
  lmsg: any;
  curval: any;
  curcoins: any;
  amount: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.buy = 0;
    this.amount = 0;
    this.msg = '';
    this.lmsg = '';
    this.curval = 0.00;
    this.curcoins = 0;
    this.setPage();
  }

  setPage() {
    console.log('in set page');
    this.curcoins = this._httpService.shareMoney();
    this.curval = this._httpService.shareDollar();
  }

  sellCoins() {
    if (this.curcoins >= this.amount) {
      console.log('in pos if');
      this._httpService.subToMoney(this.amount);
      this._httpService.addToDollar(this.amount);
      this.curcoins = this._httpService.shareMoney();
      this.curval = this._httpService.shareDollar();
      this.lmsg = {path: 'sell', coins: this.amount, value: this.curval};
      this._httpService.addToLedger(this.lmsg);
    } else {
      this.msg = 'Go mine for coins!!!';
    }
  }
}
