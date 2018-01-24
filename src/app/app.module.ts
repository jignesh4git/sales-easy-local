import { CreateAccountPageModule } from './../pages/create-account/create-account.module';
import { InvoicesPageModule } from './../pages/invoices/invoices.module';
import { OrderDetailsPageModule } from './../pages/order-details/order-details.module';
import { RetailersListPageModule } from './../pages/retailers-list/retailers-list.module';
import { EditProductListPageModule } from './../pages/edit-product-list/edit-product-list.module';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { SalesEasy } from './app.component';
import { HomePage } from '../pages/home/home';
import { AboutUsPage } from '../pages/about-us/about-us'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DistributorProvider } from '../providers/distributor/distributor';
import { RetailerProvider } from '../providers/retailer/retailer';
import { ProductProvider } from '../providers/product/product';
import { AccountProvider } from '../providers/account/account';
import { OrderProvider } from '../providers/order/order';

import {DistributorListPageModule} from "../pages/distributor-list/distributor-list.module";
import {LoginPageModule} from "../pages/login/login.module";
import {OrderReviewPageModule} from "../pages/order-review/order-review.module";
import {PreviousOrdersPageModule} from "../pages/previous-orders/previous-orders.module";
import {ProductListPageModule} from "../pages/product-list/product-list.module";
import {SignupPageModule} from "../pages/signup/signup.module";
import { ManufacturerListPageModule } from '../pages/manufacturer-list/manufacturer-list.module';
import { PlaceOrderTpPage } from '../pages/place-order-tp/place-order-tp';
import { PlaceOrderTpPageModule } from '../pages/place-order-tp/place-order-tp.module';

@NgModule({
  declarations: [
    SalesEasy,
    HomePage,
    AboutUsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(SalesEasy),
    DistributorListPageModule,
    ManufacturerListPageModule,
    LoginPageModule,
    OrderReviewPageModule,
    PreviousOrdersPageModule,
    ProductListPageModule,
    SignupPageModule,
    EditProductListPageModule,
    RetailersListPageModule,
    OrderDetailsPageModule,
    InvoicesPageModule,
    CreateAccountPageModule,
    PlaceOrderTpPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    SalesEasy,
    HomePage,
    AboutUsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    DistributorProvider,
    RetailerProvider,
    ProductProvider,
    AccountProvider,
    OrderProvider
  ]
})
export class AppModule { }
