import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AccountProvider {
  login_url;
  account_url;

  constructor(public http: Http) {
    this.login_url = "http://www.saleseasy.in/apiv1/auth/"
    this.account_url = "http://www.saleseasy.in/apiv1/account/"
  }

  login(username, password) {
    return this.http.post(this.login_url, { 'username': username, 'password': password }).map(res => res.json());
  }

  fetch_account() {
    let headers = this.create_header()
    return this.http.get(this.account_url, { headers: headers }).map(res => res.json());
  }

  create_account(data) {
    let url = "http://www.saleseasy.in/apiv1/create_account/"
    let headers = this.create_header()
    return this.http.post(url, data).map(res => res.json());
  }

  create_header() {
    let token = window.localStorage.getItem('token')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    return headers
  }
}
