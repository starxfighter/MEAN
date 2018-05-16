import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  money = 0;
  dollar = 0;
  ledger = [];
  constructor(private _http: HttpClient) { }

  shareMoney() {
    return this.money;
  }

  addToMoney(num) {
    this.money += parseInt(num, 0);
  }

  subToMoney(num) {
    console.log('selling');
    this.money -= parseInt(num, 0);
  }


  addToLedger(msg) {
    this.ledger.push(msg);
  }

  shareLedger() {
    return this.ledger;
  }

  shareDollar() {
    return this.dollar;
  }

  addToDollar(num) {
    this.dollar += parseInt(num, 0);
  }

  subToDollar(num) {
    console.log('selling');
    this.dollar -= parseInt(num, 0);
  }
  getHome() {
    return this._http.get('/home');
  }

  mineCoins() {
    return this._http.get('/mine');
  }

  buyCoins() {
    return this._http.get('/buy');
  }

  sellCoins() {
    return this._http.get('/sell');
  }

  browseLedger() {
    return this._http.get('/browse');
  }

  details(id) {
    return this._http.get('/detals/' + id);
  }

}
