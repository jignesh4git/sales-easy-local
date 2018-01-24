import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class OrderProvider {

  url;

  constructor(public http: Http) {
    this.url = "http://www.saleseasy.in/apiv1/place_order/"
  }

  submitOrder(productIds, quantities, token, distributorId, manufacturerId) {
    let placed_to_user_id;
    let user_type = window.localStorage.getItem('user_type')

    if (user_type == 'retailer') {
      placed_to_user_id = distributorId
    } else if (user_type == 'distributor'){
      placed_to_user_id = manufacturerId      
    } else if (user_type == 'employee') {
      placed_to_user_id = manufacturerId      
    }

    let payload = {
      place_order_to: placed_to_user_id,
      placed_for: distributorId,
      products: productIds,
      quantity: quantities
    };

    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    return this.http.post(this.url, payload, {headers: headers}).map(res => res.json());
  }

  get_my_orders() {
    let orders_url = "http://www.saleseasy.in/apiv1/orders/"
    let headers = this.create_header();
    return this.http.get(orders_url, { headers: headers }).map(res => res.json());
  }

  get_my_order_details(order_id) {
    let orders_url = "http://www.saleseasy.in/apiv1/order_detail/?id=" + order_id
    let headers = this.create_header();
    return this.http.get(orders_url, { headers: headers }).map(res => res.json());
  }

  get_my_invoices() {
    let invoices_url = "http://www.saleseasy.in/apiv1/invoices"
    let headers = this.create_header();
    return this.http.get(invoices_url, { headers: headers }).map(res => res.json());
  }

  create_header() {
    let token = window.localStorage.getItem('token')
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    headers.append('Authorization', 'Token ' + token);
    return headers
  }

}
