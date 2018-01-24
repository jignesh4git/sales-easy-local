import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class DistributorProvider {
  url;

  constructor(public http: Http) {
    console.log('Hello DistributorProvider Provider');
    this.url = "http://www.saleseasy.in/apiv1/distributor/"
  }

  getDistributorList() {
    let headers = this.create_header()
    return this.http.get(this.url, { headers: headers }).map( res => res.json());
  }

  getManufacturerList() {
    let headers = this.create_header()
    let url = "http://www.saleseasy.in/apiv1/manufacturer/"
    return this.http.get(url, { headers: headers }).map( res => res.json());
  }

  getListOfConnectedDistributors() {
    let token = window.localStorage.getItem('token')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    let url = "http://www.saleseasy.in/apiv1/emp_connected_distributors/"
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
