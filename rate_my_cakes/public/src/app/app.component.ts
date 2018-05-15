import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  cakes = [];
  scake = [];
  newcake: any;
  updatecake: any;
  cakeavg = 0;
  constructor(private _httpService: HttpService) {}
  ngOnInit() {
    this.newcake = {name: '', url: ''};
    this.updatecake = {stars: '', comment: ''};
    this.getCakes();
  }

  getCakes() {
    const observable = this._httpService.getCakes();
    observable.subscribe(data => {
      console.log('got our cake', data);
      this.cakes = data['cakes'];
    });
  }

  displayOneCake(id: String) {
    console.log('passed in id', id);
    const observable = this._httpService.displayCake(id);
    observable.subscribe(data => {
      console.log('retrieved cake', data);
      let starrate = 0;
      let avg = 0;
      for (let x = 0; x < data['cakes'][0].ratings.length; x++) {
        starrate += data['cakes'][0].ratings[x].stars;
      }
      avg = (starrate / data['cakes'][0].ratings.length);
      if (starrate === 0) {
        avg = 0;
      }
      this.scake = data['cakes'];
      this.cakeavg = avg;
    });
  }

  updateCake(id: String) {
    console.log('update care', this.updatecake);
    console.log('update id', id);
    const observable = this._httpService.updateCake(id, this.updatecake);
    observable.subscribe(data => {
      console.log('update cake response', data);
      this.scake = [];
    });
    this.getCakes();
  }

  addNewCake() {
    console.log('newcake', this.newcake);
    const observable = this._httpService.addCake(this.newcake);
    observable.subscribe(data => {
      console.log('add cake response', data);
    });
    this.getCakes();
  }
  // end of export
}
