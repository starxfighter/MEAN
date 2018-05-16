import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: any;
  message: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.products = [];
    this.message = [];
    this.setPage();
  }

  setPage() {
    const observable = this._httpService.getProducts();
    observable.subscribe(data => {
      console.log('got our products', data);
        if (data['error']) {
          this.message.push(data['error'].message);
          console.log('this.message', this.message);
        } else {
          this.products = data['products'];
        }
    });
  }

  destroyProduct(id: String) {
    console.log('id', id);
    const observable = this._httpService.deleteProduct(id);
    observable.subscribe(data => {
      console.log('Deleted Product', data);
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        this.setPage();
      }
    });
  }

}
