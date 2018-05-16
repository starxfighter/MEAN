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
  updateproduct: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.updateproduct = {title: '', price: '', url: ''};
    this.message = [];
    this.displayProduct(this.id);
  }

  displayProduct(id: String) {
    console.log('passed in id', id);
    const observable = this._httpService.displayProduct(this.id);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.updateproduct.title = data['products'][0].title;
        this.updateproduct.price = data['products'][0].price;
        this.updateproduct.url = data['products'][0].url;
      }
    });
  }

  updateProduct(id: String) {
    console.log('update data', this.updateproduct);
    console.log('update id', id);
    const observable = this._httpService.updateProduct(id, this.updateproduct);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        console.log('update product response', data);
        return this.router.navigate(['/home/products']);
      }
    });
  }
}
