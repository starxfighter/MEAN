import { Component, OnInit } from '@angular/core';
import { HttpService } from './http.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
// export class AppComponent  {
  tasks = [];
  results = [];
  stask = [];
  newtask: any;
  updatetask: any;
  constructor(private _httpService: HttpService) {}
  // ngonit will run when the component is initialized, AFTER the constructor method
  ngOnInit() {
    this.newtask = {title: '', description: ''};
    this.updatetask = {title: '', description: '', completed: false};
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
    displayOneTask(id: String) {
      console.log('id', id);
      const observable = this._httpService.displayTask(id);
      observable.subscribe(data => {
        console.log('got single task', data);
        this.stask = data['tasks'];
        this.updatetask.title = this.stask[0].title;
        this.updatetask.description = this.stask[0].description;
        this.updatetask.completed = this.stask[0].completed;
        // console.log('task title2', this.stask[0].title);
        // console.log('stask', this.stask);
      });
    }
    updateTask(id: String) {
      console.log('update task', this.updatetask);
      console.log('update task id', id);
      const observable = this._httpService.updateTask(id, this.updatetask);
      observable.subscribe(data => {
        console.log('update task response', data);
        this.stask = [];
      });
      this.getTasksFromService();
    }
    destroyOneTask(id: String) {
      console.log('id', id);
      const observable = this._httpService.destroyTask(id);
      observable.subscribe(data => {
        console.log('Deleted Task', data);
      });
      this.getTasksFromService();
    }
    addNewTask() {
      console.log('newtask', this.newtask);
      const observable = this._httpService.addTask(this.newtask);
      observable.subscribe(data => {
        console.log('add task response', data);
      });
      this.getTasksFromService();
    }
}
