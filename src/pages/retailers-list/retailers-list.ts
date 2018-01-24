import { RetailerProvider } from './../../providers/retailer/retailer';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-retailers-list',
  templateUrl: 'retailers-list.html',
})
export class RetailersListPage {

  retailers;

  constructor(public navCtrl: NavController, public navParams: NavParams, private retailerProvider: RetailerProvider) {
  }

  ionViewWillEnter() {
      this.retailerProvider.get_retailers().subscribe(response => {
        this.retailers = response['data'];
      }, error => {
        console.log(error);
      });
  }
}
