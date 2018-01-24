import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ProductProvider } from '../../providers/product/product';

@IonicPage()
@Component({
  selector: 'page-edit-product-list',
  templateUrl: 'edit-product-list.html',
})
export class EditProductListPage {

  products;
  distributorId;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider, public alertCtrl: AlertController) {
    this.distributorId = window.localStorage.getItem('distributorId')
  }

  ionViewWillEnter() {
      this.productProvider.getMyProductList().subscribe(response => {
        let products = response['data'];
        
        products.forEach(element => {
          element.count = 0;
        });
        this.products = products;
      }, error => {
        console.log(error);
      });
      }

}
