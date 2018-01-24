import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DistributorProvider } from '../../providers/distributor/distributor';
import { ProductListPage } from '../product-list/product-list'

@IonicPage()
@Component({
  selector: 'page-distributor-list',
  templateUrl: 'distributor-list.html',
})
export class DistributorListPage {

  distributors: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,    
    private distributorProvider: DistributorProvider) {
  }

  ionViewWillEnter() {
    this.distributorProvider.getDistributorList().subscribe(distributor => {
      console.log(distributor);
      this.distributors = distributor;
    }, error => {
      console.log(error);
    });
  }

  itemTapped(event, distributor) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductListPage, {
      distributor: distributor.user
    });
  }

  }
