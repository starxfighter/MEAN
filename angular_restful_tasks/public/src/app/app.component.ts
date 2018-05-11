import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
// export class AppComponent implements OnInit {
export class AppComponent  {
  tasks = [];
  stask = [];
  constructor(private _httpService: HttpService) {}
  // ngonit will run when the component is initialized, AFTER the constructor method
  // ngOnInit() {
  //   this.getTasksFromService();
  // }
    getTasksFromService() {
      const observable = this._httpService.getTasks();
      observable.subscribe(data => {
        console.log('Got our tasks!', data);
        this.tasks = data['tasks'];
        console.log('tasks', this.tasks);
      });
    }
    displayOneTask(id: String) {
      console.log('id', id);
      const observable = this._httpService.displayTask(id);
      observable.subscribe(data => {
        console.log('got single task', data);
        this.stask = data['tasks'];
        console.log('stask', this.stask);
      });
    }
}
