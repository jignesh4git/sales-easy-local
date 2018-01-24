import { ProductListPage } from './../pages/product-list/product-list';
import { InvoicesPage } from './../pages/invoices/invoices';
import { RetailersListPage } from './../pages/retailers-list/retailers-list';
import { EditProductListPage } from './../pages/edit-product-list/edit-product-list';
import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { DistributorListPage } from '../pages/distributor-list/distributor-list'
import { LoginPage } from '../pages/login/login'
import { PreviousOrdersPage } from '../pages/previous-orders/previous-orders'
import { AboutUsPage } from '../pages/about-us/about-us'
import { ManufacturerListPage } from '../pages/manufacturer-list/manufacturer-list';
import { CreateAccountPage } from '../pages/create-account/create-account';
import { PlaceOrderTpPage } from '../pages/place-order-tp/place-order-tp';

@Component({
  templateUrl: 'app.html'
})
export class SalesEasy {
  @ViewChild(Nav) nav: Nav;

  rootPage: any;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public events: Events) {

    this.initializeApp();

    this.pages = [];

    events.subscribe('user_type_change', (user_type) => {
      this.pages = [];
      if (user_type == 'distributor') {
        this.pages.push({ title: 'Home', component: HomePage })
        this.pages.push({ title: 'Manufacturers', component: ManufacturerListPage })        
        this.pages.push({ title: 'Products', component: EditProductListPage })
        this.pages.push({ title: 'Retailers', component: RetailersListPage })
        this.pages.push({ title: 'Invoices', component: InvoicesPage })  
        this.pages.push({ title: 'Order History', component: PreviousOrdersPage })
        this.pages.push({ title: 'About Us', component: AboutUsPage })
        this.pages.push({ title: 'Logout', component: AboutUsPage })              
      } else if (user_type == 'retailer') {
        this.pages.push({ title: 'Home', component: HomePage })
        this.pages.push({ title: 'Place Order', component: DistributorListPage })
        this.pages.push({ title: 'Order History', component: PreviousOrdersPage })
        this.pages.push({ title: 'About Us', component: AboutUsPage })
        this.pages.push({ title: 'Logout', component: AboutUsPage })  
      } else if (user_type == 'employee') {
        this.pages.push({ title: 'Home', component: HomePage })
        this.pages.push({ title: 'Create Account', component: CreateAccountPage })
        this.pages.push({ title: 'Place Order', component: PlaceOrderTpPage })
        this.pages.push({ title: 'About Us', component: AboutUsPage })
        this.pages.push({ title: 'Logout', component: AboutUsPage })  
      } else {
        this.pages.push({ title: 'Order History', component: PreviousOrdersPage })
        this.pages.push({ title: 'About Us', component: AboutUsPage })
        this.pages.push({ title: 'Logout', component: AboutUsPage })  
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.checkPreviousAuthorization();
    });
  }

  openPage(page) {
    if (page.title == 'Logout') {
      this.logout();
    } else {
      this.nav.setRoot(page.component);      
    }
  }

  logout() {
    window.localStorage.removeItem('username');
    window.localStorage.removeItem('password');
    window.localStorage.removeItem('token');
    window.localStorage.removeItem('partnerId');
    window.localStorage.removeItem('user_type');
    this.nav.setRoot(LoginPage);
    this.nav.popToRoot();
  }

  checkPreviousAuthorization(): void {
    if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
      (window.localStorage.getItem('token') === "undefined" || window.localStorage.getItem('token') === null) &&
      (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
      this.rootPage = LoginPage;
    } else {
      this.events.publish('user_type_change', window.localStorage.getItem('user_type'));
      this.rootPage = HomePage;
    }
  }
}
