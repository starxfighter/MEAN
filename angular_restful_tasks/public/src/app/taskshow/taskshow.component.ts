import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-taskshow',
  templateUrl: './taskshow.component.html',
  styleUrls: ['./taskshow.component.css']
})
export class TaskshowComponent implements OnInit {
  @Input() displayOneTask: any;
  constructor() { }

  ngOnInit() {
  }

}
