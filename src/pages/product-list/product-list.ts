import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController} from 'ionic-angular';

import {ProductProvider} from '../../providers/product/product';
import {OrderReviewPage} from "../order-review/order-review";

@IonicPage()
@Component({
  selector: 'page-product-list',
  templateUrl: 'product-list.html',
})
export class ProductListPage {

  distributorId;
  manufacturerId;
  products;

  constructor(public navCtrl: NavController, public navParams: NavParams, private productProvider: ProductProvider, public alertCtrl: AlertController) {
    if (navParams.data['distributor'] != undefined) {
      this.distributorId = navParams.data['distributor'].id;
    }
    if (navParams.data['manufacturer'] != undefined) {
      this.manufacturerId = navParams.data['manufacturer'].id;      
    }
  }

  ionViewWillEnter() {
    if (this.distributorId != undefined) {
      this.productProvider.getProductList(this.distributorId).subscribe(products => {
        console.log(products);
        products.forEach(element => {
          element.count = 0;
        });
        this.products = products;
      }, error => {
        console.log(error);
      });
    } else if (this.manufacturerId != undefined) {
      this.productProvider.getProductList(this.manufacturerId).subscribe(products => {
        console.log(products);
        products.forEach(element => {
          element.count = 0;
        });
        this.products = products;
      }, error => {
        console.log(error);
      });
    }
  }

  decrease(event, product) {
    if (product.count == undefined || product.count <= 1) {
      product.count = 0;
    } else {
      product.count -= 1;
    }
  }

  increase(event, product) {
    if (product.count == undefined) {
      product.count = 0;
    }
    product.count += 1;
  }

  onChangeCount(event, product) {
    product.count = parseInt(event.value)
  }

  checkout(event) {
    var selectedProducts = this.products.filter(function (product) {
      return product.count > 0
    });

    if (selectedProducts.length > 0) {
      this.navCtrl.push(OrderReviewPage, {
        products: selectedProducts,
        distributorId: this.distributorId,
        manufacturerId: this.manufacturerId
      });
    } else {
      let alert = this.alertCtrl.create({
        title: 'Error',
        subTitle: 'Please select some product to checkout.',
        buttons: ['OK']
      });
      alert.present();
    }

  }

}
