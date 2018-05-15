import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _httpService: HttpService,
  ) {}

  // getSeattle() {
  //   console.log('in seattle call');
  //   const observable = this._httpService.getSeattle();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }

  // getSanjose() {
  //   const observable = this._httpService.getSanjose();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }

  // getBurbank() {
  //   const observable = this._httpService.getBurbank();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }

  // getDallas() {
  //   const observable = this._httpService.getDallas();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }

  // getDC() {
  //   const observable = this._httpService.getDC();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }

  // getChicago() {
  //   const observable = this._httpService.getChicago();
  //   observable.subscribe(data => {
  //     console.log('Seattle Data', data);
  //   });
  // }
}
