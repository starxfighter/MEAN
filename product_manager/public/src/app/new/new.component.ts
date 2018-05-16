import { Component, OnInit } from '@angular/core';
import { HttpService } from './../http.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  newproduct: any;
  message: any;
  constructor(
    private _httpService: HttpService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.newproduct = {title: '', price: '', url: ''};
    this.message = [];
  }

  addNewProduct() {
    console.log('newproduct', this.newproduct);
    const observable = this._httpService.addProduct(this.newproduct);
    observable.subscribe(data => {
      if (data['error']) {
        this.message.push(data['error'].message);
        console.log('this.message', this.message);
      } else {
        return this.router.navigate(['/home/products']);
      }
    });
  }

}
