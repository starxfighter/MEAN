import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'app';
  tasks = [];
  constructor(private _httpService: HttpService) {}
  // ngonit will run when the component is initialized, AFTER the constructor method
  ngOnInit() {
    this.getTasksFromService();
  }
    getTasksFromService() {
      const observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log('Got our tasks!', data);
        this.tasks = data['tasks'];
        console.log('tasks', this.tasks);
      });
    }
}
