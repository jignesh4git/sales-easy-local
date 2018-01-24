import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderProvider } from "../../providers/order/order";

@IonicPage()
@Component({
  selector: 'page-order-details',
  templateUrl: 'order-details.html',
})
export class OrderDetailsPage {
  order_id: any;
  order_details: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider) {
    this.order_id = navParams.data['order_id']
  }

  ionViewWillEnter() {
    this.orderProvider.get_my_order_details(this.order_id).subscribe(response => {
      this.order_details = response['data'];
      console.log(response['data']);
    });
  }

}
