import { Component, OnInit, Input } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  id: number;
  detail: any;
  details: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.details = [];
    this.detail = 0;
    this.id = this.route.snapshot.params.id;
    this.setPage();
  }


  setPage() {
    this.details = this._httpService.shareLedger();
    this.detail = this.details[this.id];
  }
}
