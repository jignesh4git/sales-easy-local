import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ProductProvider {

  url;
  
  constructor(public http: Http) {
    console.log('Hello ProductProvider Provider');
    this.url = "http://www.saleseasy.in/apiv1/product/?id="    
  }

  getProductList(partnerId) {
    let headers = this.create_header()
    return this.http.get(this.url + partnerId, { headers: headers }).map( res => res.json());
  }

  getMyProductList() {
    let headers = this.create_header()
    let url = "http://www.saleseasy.in/apiv1/my_products/"    
    return this.http.get(url, { headers: headers }).map( res => res.json());
  }

  create_header() {
    let token = window.localStorage.getItem('token')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    return headers
  }
}
