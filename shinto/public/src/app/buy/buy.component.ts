import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-buy',
  templateUrl: './buy.component.html',
  styleUrls: ['./buy.component.css']
})
export class BuyComponent implements OnInit {
  buy: any;
  lmsg: any;
  msg: any;
  curval: any;
  curcoins: any;
  amount: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.buy = 0;
    this.amount = 0;
    this.lmsg = '';
    this.msg = '';
    this.curval = 0.00;
    this.curcoins = 0;
    this.setPage();
  }

  setPage() {
    console.log('in set page');
    this.curcoins = this._httpService.shareMoney();
    this.curval = this._httpService.shareDollar();
  }

  buyCoins() {
    console.log('in buy');
    if (this.curval >= this.amount) {
      console.log('in pos if');
      this._httpService.addToMoney(this.amount);
      this._httpService.subToDollar(this.amount);
      this.curcoins = this._httpService.shareMoney();
      this.curval = this._httpService.shareDollar();
      this.lmsg = {path: 'buy', coins: this.amount, value: this.curval};
      this._httpService.addToLedger(this.lmsg);
    } else {
      this.msg = 'Ask mom for more money!!!';
    }
  }
}
