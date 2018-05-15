import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cakeshow',
  templateUrl: './cakeshow.component.html',
  styleUrls: ['./cakeshow.component.css']
})
export class CakeshowComponent implements OnInit {
  @Input() displayOneCake: any;
  @Input() average: any;
  constructor() { }

  ngOnInit() {
  }

}
