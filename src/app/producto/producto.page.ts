import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.page.html',
  styleUrls: ['./producto.page.scss'],
})
export class ProductoPage implements OnInit {

  products = []

  constructor(
    private http  : HttpClient
  ) { }

  ngOnInit() {
    this.http.get<any>('https://dummyjson.com/products')
    .subscribe(res=>{
      console.log(res);
      this.products = res.results;
    });
  }

}
