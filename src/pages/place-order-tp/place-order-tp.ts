import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DistributorProvider } from '../../providers/distributor/distributor';
import { ProductListPage } from '../product-list/product-list'

@IonicPage()
@Component({
  selector: 'page-place-order-tp',
  templateUrl: 'place-order-tp.html',
})
export class PlaceOrderTpPage {

  distributors: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,    
    private distributorProvider: DistributorProvider) {
  }

  ionViewWillEnter() {
    this.distributorProvider.getListOfConnectedDistributors().subscribe(response => {
      console.log(response);
      this.distributors = response["data"];
    }, error => {
      console.log(error);
    });
  }

  itemTapped(event, distributor) {
    let employerId = window.localStorage.getItem('employerId')
    this.navCtrl.push(ProductListPage, {
      distributor: distributor.user,
      manufacturer: {id: employerId}
    });
  }


  

}
