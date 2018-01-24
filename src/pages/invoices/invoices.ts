import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrderProvider } from "../../providers/order/order";
import { OrderDetailsPage } from '../order-details/order-details';

@IonicPage()
@Component({
  selector: 'page-invoices',
  templateUrl: 'invoices.html',
})
export class InvoicesPage {

  invoices;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider, public alertCtrl: AlertController) {
  }

  ionViewWillEnter() {
      this.orderProvider.get_my_invoices().subscribe(response => {
        this.invoices = response['data'];
      }, error => {
        console.log(error);
      });
  }

  itemTapped(event, order) {
    let requested_order_id = order.id
    let params = {
      order_id: requested_order_id
    }
    this.navCtrl.push(OrderDetailsPage, params);
  }

}
