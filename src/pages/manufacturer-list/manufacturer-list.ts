import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { DistributorProvider } from '../../providers/distributor/distributor';
import { ProductListPage } from '../product-list/product-list'

@IonicPage()
@Component({
  selector: 'page-manufacturer-list',
  templateUrl: 'manufacturer-list.html',
})
export class ManufacturerListPage {

  manufacturers: any;
  
  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController,    
    private distributorProvider: DistributorProvider) {
  }

  ionViewWillEnter() {
    this.distributorProvider.getManufacturerList().subscribe(manufacturers => {
      this.manufacturers = manufacturers;
    }, error => {
      console.log(error);
    });
  }

  itemTapped(event, manufacturer) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ProductListPage, {
      manufacturer: manufacturer.user
    });
  }

  }
