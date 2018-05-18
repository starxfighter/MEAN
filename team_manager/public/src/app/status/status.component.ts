import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-status',
  templateUrl: './status.component.html',
  styleUrls: ['./status.component.css']
})
export class StatusComponent implements OnInit {

  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.setPage();
  }

  setPage() {
    return this.router.navigate(['/home/status/game/1']);
  }

}
