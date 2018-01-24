import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';
import {OrderProvider} from "../../providers/order/order";

@IonicPage()
@Component({
  selector: 'page-order-review',
  templateUrl: 'order-review.html',
})
export class OrderReviewPage {

  products: any;
  distributorId: any;
  manufacturerId: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private orderProvider: OrderProvider, public alertCtrl: AlertController) {
    this.products = navParams.data['products'];
    this.distributorId = this.navParams.data['distributorId'];
    this.manufacturerId = this.navParams.data["manufacturerId"]
  }

  placeOrder(event) {
    let productIds = this.products.map(product => {
      return product.id
    });

    let quantities = this.products.map(product => {
      return product.count
    });

    let token = window.localStorage.getItem('token');

    this.orderProvider.submitOrder(productIds, quantities, token, this.distributorId, this.manufacturerId).subscribe(response => {

      let alert = this.alertCtrl.create({
        title: 'Order Confirmed.',
        subTitle: 'Thank you! Your order has been placed successfully.',
        buttons: ['OK']
      });
      alert.present();

      this.navCtrl.popToRoot();
    }, error => {
      let alert = this.alertCtrl.create({
        title: 'Order Failed.',
        subTitle: 'There was an error processing your request. Please contact Sales Easy team.',
        buttons: ['OK']
      });
      alert.present();
      this.navCtrl.popToRoot();
    });
  }

}
