import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class RetailerProvider {

  my_retailers_url;

  constructor(public http: Http) {
    this.my_retailers_url = "http://www.saleseasy.in/apiv1/my_retailers/"
  }

  get_retailers() {
    let headers = this.create_header()
    return this.http.get(this.my_retailers_url, { headers: headers }).map(res => res.json());
  }

  create_header() {
    let token = window.localStorage.getItem('token')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    return headers
  }

}
