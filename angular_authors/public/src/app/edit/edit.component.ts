import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: String;
  updateauthor: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.updateauthor = {name: ''};
    this.message = [];
    this.displayAuthor(this.id);
  }

  displayAuthor(id: String) {
    console.log('passed in id', id);
    const observable = this._httpService.displayAuthor(this.id);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.updateauthor.name = data['authors'][0].name;
      }
    });
  }

  updateAuthor(id: String) {
    console.log('update data', this.updateauthor);
    console.log('update id', id);
    const observable = this._httpService.updateAuthor(id, this.updateauthor);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        console.log('update cake response', data);
        return this.router.navigate(['']);
      }
    });
  }

}
