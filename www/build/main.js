webpackJsonp([0],{

/***/ 116:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateAccountPageModule", function() { return CreateAccountPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_account__ = __webpack_require__(221);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var CreateAccountPageModule = (function () {
    function CreateAccountPageModule() {
    }
    return CreateAccountPageModule;
}());
CreateAccountPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__create_account__["a" /* CreateAccountPage */]),
        ],
    })
], CreateAccountPageModule);

//# sourceMappingURL=create-account.module.js.map

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/create-account/create-account.module": [
		117
	],
	"../pages/distributor-list/distributor-list.module": [
		160
	],
	"../pages/edit-product-list/edit-product-list.module": [
		163
	],
	"../pages/invoices/invoices.module": [
		165
	],
	"../pages/login/login.module": [
		167
	],
	"../pages/manufacturer-list/manufacturer-list.module": [
		169
	],
	"../pages/order-details/order-details.module": [
		172
	],
	"../pages/order-review/order-review.module": [
		171
	],
	"../pages/place-order-tp/place-order-tp.module": [
		176
	],
	"../pages/previous-orders/previous-orders.module": [
		173
	],
	"../pages/product-list/product-list.module": [
		175
	],
	"../pages/retailers-list/retailers-list.module": [
		178
	],
	"../pages/signup/signup.module": [
		181
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorListPageModule", function() { return DistributorListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__distributor_list__ = __webpack_require__(161);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DistributorListPageModule = (function () {
    function DistributorListPageModule() {
    }
    return DistributorListPageModule;
}());
DistributorListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__distributor_list__["a" /* DistributorListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__distributor_list__["a" /* DistributorListPage */]),
        ],
    })
], DistributorListPageModule);

//# sourceMappingURL=distributor-list.module.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DistributorListPage = (function () {
    function DistributorListPage(navCtrl, navParams, loadingCtrl, distributorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.distributorProvider = distributorProvider;
    }
    DistributorListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.distributorProvider.getDistributorList().subscribe(function (distributor) {
            console.log(distributor);
            _this.distributors = distributor;
        }, function (error) {
            console.log(error);
        });
    };
    DistributorListPage.prototype.itemTapped = function (event, distributor) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */], {
            distributor: distributor.user
        });
    };
    return DistributorListPage;
}());
DistributorListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-distributor-list',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/distributor-list/distributor-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Distributors</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="bg-style">\n  <ion-card ion-item *ngFor="let distributor of distributors" (click)="itemTapped($event, distributor)">\n    <ion-card-header>\n      {{ distributor.company_name }}\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ distributor.company_address }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/distributor-list/distributor-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__["a" /* DistributorProvider */]])
], DistributorListPage);

//# sourceMappingURL=distributor-list.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderReviewPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderReviewPage = (function () {
    function OrderReviewPage(navCtrl, navParams, orderProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.alertCtrl = alertCtrl;
        this.products = navParams.data['products'];
        this.distributorId = this.navParams.data['distributorId'];
        this.manufacturerId = this.navParams.data["manufacturerId"];
    }
    OrderReviewPage.prototype.placeOrder = function (event) {
        var _this = this;
        var productIds = this.products.map(function (product) {
            return product.id;
        });
        var quantities = this.products.map(function (product) {
            return product.count;
        });
        var token = window.localStorage.getItem('token');
        this.orderProvider.submitOrder(productIds, quantities, token, this.distributorId, this.manufacturerId).subscribe(function (response) {
            var alert = _this.alertCtrl.create({
                title: 'Order Confirmed.',
                subTitle: 'Thank you! Your order has been placed successfully.',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.popToRoot();
        }, function (error) {
            var alert = _this.alertCtrl.create({
                title: 'Order Failed.',
                subTitle: 'There was an error processing your request. Please contact Sales Easy team.',
                buttons: ['OK']
            });
            alert.present();
            _this.navCtrl.popToRoot();
        });
    };
    return OrderReviewPage;
}());
OrderReviewPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-review',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/order-review/order-review.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Review Order</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style">\n  <ion-row text-center>\n    <ion-col>\n          <button ion-button round (click)="placeOrder($event)">Place Order</button>\n    </ion-col>\n  </ion-row>\n\n  <ion-item-group>\n    <ion-item-divider color="light">Items in cart</ion-item-divider>\n    <ion-list *ngFor="let product of products">\n      <ion-row>\n        <ion-col>\n          <ion-item>{{ product.base.name }} - {{ product.base.packing }}</ion-item>\n        </ion-col>\n        <ion-col>\n          <ion-item >{{ product.count }}</ion-item>\n        </ion-col>\n      </ion-row>\n    </ion-list>\n  </ion-item-group>\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/order-review/order-review.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], OrderReviewPage);

//# sourceMappingURL=order-review.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditProductListPageModule", function() { return EditProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_product_list__ = __webpack_require__(164);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditProductListPageModule = (function () {
    function EditProductListPageModule() {
    }
    return EditProductListPageModule;
}());
EditProductListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__edit_product_list__["a" /* EditProductListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_product_list__["a" /* EditProductListPage */]),
        ],
    })
], EditProductListPageModule);

//# sourceMappingURL=edit-product-list.module.js.map

/***/ }),

/***/ 164:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditProductListPage = (function () {
    function EditProductListPage(navCtrl, navParams, productProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.alertCtrl = alertCtrl;
        this.distributorId = window.localStorage.getItem('distributorId');
    }
    EditProductListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.productProvider.getMyProductList().subscribe(function (response) {
            var products = response['data'];
            products.forEach(function (element) {
                element.count = 0;
            });
            _this.products = products;
        }, function (error) {
            console.log(error);
        });
    };
    return EditProductListPage;
}());
EditProductListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-edit-product-list',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/edit-product-list/edit-product-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style" padding>\n  <ion-card ion-item *ngFor="let product of products">\n    <ion-card-header>\n      {{ product.base.name }}\n    </ion-card-header>\n    <ion-card-content>\n      {{ product.base.packing }} (code : {{product.base.code}})\n      Price: {{ product.selling_price }} \n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/edit-product-list/edit-product-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], EditProductListPage);

//# sourceMappingURL=edit-product-list.js.map

/***/ }),

/***/ 165:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvoicesPageModule", function() { return InvoicesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__invoices__ = __webpack_require__(166);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var InvoicesPageModule = (function () {
    function InvoicesPageModule() {
    }
    return InvoicesPageModule;
}());
InvoicesPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__invoices__["a" /* InvoicesPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__invoices__["a" /* InvoicesPage */]),
        ],
    })
], InvoicesPageModule);

//# sourceMappingURL=invoices.module.js.map

/***/ }),

/***/ 166:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InvoicesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var InvoicesPage = (function () {
    function InvoicesPage(navCtrl, navParams, orderProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.alertCtrl = alertCtrl;
    }
    InvoicesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.orderProvider.get_my_invoices().subscribe(function (response) {
            _this.invoices = response['data'];
        }, function (error) {
            console.log(error);
        });
    };
    InvoicesPage.prototype.itemTapped = function (event, order) {
        var requested_order_id = order.id;
        var params = {
            order_id: requested_order_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], params);
    };
    return InvoicesPage;
}());
InvoicesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-invoices',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/invoices/invoices.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Invoices</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content>\n    <ion-list ion-item *ngFor="let item of invoices">\n        <ion-item-group>\n            <ion-item color="light"> {{item.connected_partner.company_name}} </ion-item>\n              <ion-item>\n                  <h3>Order Id: {{item.id}}</h3>\n                  <h3>Invoice Id: {{item.invoice_id}} </h3>\n                  <h3>Order Date: {{ item.order_date }}</h3>\n                <h3>Status: {{ item.order_status }}</h3>\n                <h3>Delivery date: {{item.delivery_date}}</h3>                \n              <h3>Item Total: {{item.item_total}}</h3>\n              <h3>S GST Total: {{item.s_gst_total}}</h3>\n              <h3>C GST Total: {{item.c_gst_total}}</h3>\n              <h3>{{item.other_charge_description}} {{item.other_charge}}</h3>\n              \n              <h3>Bill total: {{item.bill_total}} </h3>\n              </ion-item>\n              </ion-item-group>\n    </ion-list> \n</ion-content>    \n    '/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/invoices/invoices.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], InvoicesPage);

//# sourceMappingURL=invoices.js.map

/***/ }),

/***/ 167:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login__ = __webpack_require__(168);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LoginPageModule = (function () {
    function LoginPageModule() {
    }
    return LoginPageModule;
}());
LoginPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__login__["a" /* LoginPage */]),
        ],
    })
], LoginPageModule);

//# sourceMappingURL=login.module.js.map

/***/ }),

/***/ 168:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_account_account__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginPage = (function () {
    function LoginPage(nav, navParams, formBuilder, accountProvider, alertCtrl, events) {
        this.nav = nav;
        this.navParams = navParams;
        this.formBuilder = formBuilder;
        this.accountProvider = accountProvider;
        this.alertCtrl = alertCtrl;
        this.events = events;
        this.nav = nav;
        this.authForm = formBuilder.group({
            username: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(4), __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].maxLength(30)])],
            password: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].minLength(8)])]
        });
    }
    LoginPage.prototype.onSubmit = function (value) {
        var _this = this;
        if (this.authForm.valid) {
            this.accountProvider.login(value.username, value.password).subscribe(function (response) {
                window.localStorage.setItem('username', value.username);
                window.localStorage.setItem('password', value.password);
                window.localStorage.setItem('token', response['token']);
                _this.accountProvider.fetch_account().subscribe(function (response) {
                    window.localStorage.setItem('user_type', response['type']);
                    window.localStorage.setItem('partnerId', response['data'].user.id);
                    if (response['type'] == 'employee') {
                        window.localStorage.setItem('employerId', response['data']['partner']['user']['id']);
                    }
                    _this.events.publish('user_type_change', response['type']);
                    _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
                });
            }, function (error) {
                console.log(error);
                var alert = _this.alertCtrl.create({
                    title: 'Invalid',
                    subTitle: 'Please enter correct username or password!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/login/login.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-style" padding id="login">\n  <ion-grid>\n    <ion-row>\n      <ion-col text-center>\n        <h1>Login with your saleseasy.in account.</h1>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <ion-content padding>\n    <form [formGroup]="authForm" (ngSubmit)="onSubmit(authForm.value)">\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.username.valid && authForm.controls.username.touched}">\n        <ion-label floating>Username</ion-label>\n        <ion-input formControlName="username" type="text" autocomplete=\'off\' autocorrect=\'off\' autocapitalize=\'off\'></ion-input>\n      </ion-item>\n\n      <ion-item *ngIf="authForm.controls.username.hasError(\'required\') && authForm.controls.username.touched">\n        <p>Sorry, field username is required!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'pattern\') && authForm.controls.username.touched">\n        <p>Sorry, only small and capital letters are allowed!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'minlength\') && authForm.controls.username.touched">\n        <p>Sorry, minimum username length is 4!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.username.hasError(\'maxlength\') && authForm.controls.username.touched">\n        <p>Sorry, maximum username length is 30!</p>\n      </ion-item>\n\n      <ion-item [ngClass]="{\'error-border\':!authForm.controls.password.valid && authForm.controls.password.touched}">\n        <ion-label floating>Password</ion-label>\n        <ion-input formControlName="password" type="password"></ion-input>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.password.hasError(\'required\') && authForm.controls.password.touched">\n        <p>Sorry, field password is required!</p>\n      </ion-item>\n      <ion-item *ngIf="authForm.controls.password.hasError(\'minlength\') && authForm.controls.password.touched">\n        <p>Sorry, minimum password length is 8!</p>\n      </ion-item>\n\n      <button ion-button full color="primary" [disabled]="!authForm.valid" style="margin-top: 20px;" type="submit">Login</button>\n    </form>\n\n  </ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/login/login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_4__providers_account_account__["a" /* AccountProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* Events */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManufacturerListPageModule", function() { return ManufacturerListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__manufacturer_list__ = __webpack_require__(170);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ManufacturerListPageModule = (function () {
    function ManufacturerListPageModule() {
    }
    return ManufacturerListPageModule;
}());
ManufacturerListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__manufacturer_list__["a" /* ManufacturerListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__manufacturer_list__["a" /* ManufacturerListPage */]),
        ],
    })
], ManufacturerListPageModule);

//# sourceMappingURL=manufacturer-list.module.js.map

/***/ }),

/***/ 170:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ManufacturerListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ManufacturerListPage = (function () {
    function ManufacturerListPage(navCtrl, navParams, loadingCtrl, distributorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.distributorProvider = distributorProvider;
    }
    ManufacturerListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.distributorProvider.getManufacturerList().subscribe(function (manufacturers) {
            _this.manufacturers = manufacturers;
        }, function (error) {
            console.log(error);
        });
    };
    ManufacturerListPage.prototype.itemTapped = function (event, manufacturer) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */], {
            manufacturer: manufacturer.user
        });
    };
    return ManufacturerListPage;
}());
ManufacturerListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-manufacturer-list',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/manufacturer-list/manufacturer-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Manufacturers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="bg-style">\n  <ion-card ion-item *ngFor="let manufacturer of manufacturers" (click)="itemTapped($event, manufacturer)">\n    <ion-card-header>\n      {{ manufacturer.company_name }}\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ manufacturer.company_address }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/manufacturer-list/manufacturer-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__["a" /* DistributorProvider */]])
], ManufacturerListPage);

//# sourceMappingURL=manufacturer-list.js.map

/***/ }),

/***/ 171:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderReviewPageModule", function() { return OrderReviewPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_review__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderReviewPageModule = (function () {
    function OrderReviewPageModule() {
    }
    return OrderReviewPageModule;
}());
OrderReviewPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_review__["a" /* OrderReviewPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_review__["a" /* OrderReviewPage */]),
        ],
    })
], OrderReviewPageModule);

//# sourceMappingURL=order-review.module.js.map

/***/ }),

/***/ 172:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderDetailsPageModule", function() { return OrderDetailsPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__order_details__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var OrderDetailsPageModule = (function () {
    function OrderDetailsPageModule() {
    }
    return OrderDetailsPageModule;
}());
OrderDetailsPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__order_details__["a" /* OrderDetailsPage */]),
        ],
    })
], OrderDetailsPageModule);

//# sourceMappingURL=order-details.module.js.map

/***/ }),

/***/ 173:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviousOrdersPageModule", function() { return PreviousOrdersPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__previous_orders__ = __webpack_require__(174);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PreviousOrdersPageModule = (function () {
    function PreviousOrdersPageModule() {
    }
    return PreviousOrdersPageModule;
}());
PreviousOrdersPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__previous_orders__["a" /* PreviousOrdersPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__previous_orders__["a" /* PreviousOrdersPage */]),
        ],
    })
], PreviousOrdersPageModule);

//# sourceMappingURL=previous-orders.module.js.map

/***/ }),

/***/ 174:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviousOrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_details_order_details__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PreviousOrdersPage = (function () {
    function PreviousOrdersPage(navCtrl, navParams, orderProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.alertCtrl = alertCtrl;
    }
    PreviousOrdersPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.orderProvider.get_my_orders().subscribe(function (response) {
            _this.orders = response['data'];
        }, function (error) {
            console.log(error);
        });
    };
    PreviousOrdersPage.prototype.itemTapped = function (event, order) {
        var requested_order_id = order.id;
        var params = {
            order_id: requested_order_id
        };
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_details_order_details__["a" /* OrderDetailsPage */], params);
    };
    return PreviousOrdersPage;
}());
PreviousOrdersPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-previous-orders',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/previous-orders/previous-orders.html"*/'<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Orders</ion-title>\n    </ion-navbar>\n  </ion-header>\n  \n  <ion-content class="bg-style" padding>\n    <ion-card ion-item *ngFor="let order of orders" (click)="itemTapped($event, order)">\n      <ion-card-header>\n        Invoice Id: {{ order.invoice_id}}\n      </ion-card-header>\n      <ion-card-content>\n          <h3>Fulfilled by: {{ order.connected_partner.company_name}}</h3>\n          <h3>Mobile no: {{ order.connected_partner.mobile_number }}</h3>          \n        <h3>Order date: {{ order.order_date }}</h3>\n        <h3>Status: {{order.order_status}}</h3>\n        <h3>Delivery Date: {{order.delivery_date}}</h3>        \n        <h3>Bill Total: {{order.bill_total}}</h3>\n      </ion-card-content>\n    </ion-card>\n  </ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/previous-orders/previous-orders.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], PreviousOrdersPage);

//# sourceMappingURL=previous-orders.js.map

/***/ }),

/***/ 175:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListPageModule", function() { return ProductListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__product_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ProductListPageModule = (function () {
    function ProductListPageModule() {
    }
    return ProductListPageModule;
}());
ProductListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__product_list__["a" /* ProductListPage */]),
        ],
    })
], ProductListPageModule);

//# sourceMappingURL=product-list.module.js.map

/***/ }),

/***/ 176:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlaceOrderTpPageModule", function() { return PlaceOrderTpPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__place_order_tp__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PlaceOrderTpPageModule = (function () {
    function PlaceOrderTpPageModule() {
    }
    return PlaceOrderTpPageModule;
}());
PlaceOrderTpPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__place_order_tp__["a" /* PlaceOrderTpPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__place_order_tp__["a" /* PlaceOrderTpPage */]),
        ],
    })
], PlaceOrderTpPageModule);

//# sourceMappingURL=place-order-tp.module.js.map

/***/ }),

/***/ 177:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaceOrderTpPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_list_product_list__ = __webpack_require__(50);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaceOrderTpPage = (function () {
    function PlaceOrderTpPage(navCtrl, navParams, loadingCtrl, distributorProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loadingCtrl = loadingCtrl;
        this.distributorProvider = distributorProvider;
    }
    PlaceOrderTpPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.distributorProvider.getListOfConnectedDistributors().subscribe(function (response) {
            console.log(response);
            _this.distributors = response["data"];
        }, function (error) {
            console.log(error);
        });
    };
    PlaceOrderTpPage.prototype.itemTapped = function (event, distributor) {
        var employerId = window.localStorage.getItem('employerId');
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_list_product_list__["a" /* ProductListPage */], {
            distributor: distributor.user,
            manufacturer: { id: employerId }
        });
    };
    return PlaceOrderTpPage;
}());
PlaceOrderTpPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-place-order-tp',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/place-order-tp/place-order-tp.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Select Distributor</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="bg-style">\n  <ion-card ion-item *ngFor="let distributor of distributors" (click)="itemTapped($event, distributor)">\n    <ion-card-header>\n      {{ distributor.company_name }}\n    </ion-card-header>\n\n    <ion-card-content>\n      {{ distributor.company_address }}\n    </ion-card-content>\n  </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/place-order-tp/place-order-tp.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_distributor_distributor__["a" /* DistributorProvider */]])
], PlaceOrderTpPage);

//# sourceMappingURL=place-order-tp.js.map

/***/ }),

/***/ 178:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetailersListPageModule", function() { return RetailersListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__retailers_list__ = __webpack_require__(179);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var RetailersListPageModule = (function () {
    function RetailersListPageModule() {
    }
    return RetailersListPageModule;
}());
RetailersListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__retailers_list__["a" /* RetailersListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__retailers_list__["a" /* RetailersListPage */]),
        ],
    })
], RetailersListPageModule);

//# sourceMappingURL=retailers-list.module.js.map

/***/ }),

/***/ 179:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailersListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_retailer_retailer__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetailersListPage = (function () {
    function RetailersListPage(navCtrl, navParams, retailerProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.retailerProvider = retailerProvider;
    }
    RetailersListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.retailerProvider.get_retailers().subscribe(function (response) {
            _this.retailers = response['data'];
        }, function (error) {
            console.log(error);
        });
    };
    return RetailersListPage;
}());
RetailersListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-retailers-list',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/retailers-list/retailers-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>My Retailers</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style" padding>\n  <ion-card ion-item *ngFor="let retailer of retailers">\n    <ion-card-header>\n      {{ retailer.store_name }}\n    </ion-card-header>\n    <ion-card-content>\n      <ion-item>Name: {{retailer.user.first_name}} {{retailer.user.last_name}}</ion-item>\n      <ion-item>Mobile: {{retailer.mobile_number}}</ion-item>\n      <ion-item>Address: {{retailer.store_address}}</ion-item>\n      <ion-item>Pin: {{retailer.pin_code}}</ion-item>\n      <ion-item>Email: {{retailer.user.email}}</ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/retailers-list/retailers-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_0__providers_retailer_retailer__["a" /* RetailerProvider */]])
], RetailersListPage);

//# sourceMappingURL=retailers-list.js.map

/***/ }),

/***/ 180:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RetailerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RetailerProvider = (function () {
    function RetailerProvider(http) {
        this.http = http;
        this.my_retailers_url = "http://www.saleseasy.in/apiv1/my_retailers/";
    }
    RetailerProvider.prototype.get_retailers = function () {
        var headers = this.create_header();
        return this.http.get(this.my_retailers_url, { headers: headers }).map(function (res) { return res.json(); });
    };
    RetailerProvider.prototype.create_header = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return headers;
    };
    return RetailerProvider;
}());
RetailerProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], RetailerProvider);

//# sourceMappingURL=retailer.js.map

/***/ }),

/***/ 181:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupPageModule", function() { return SignupPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__signup__ = __webpack_require__(269);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SignupPageModule = (function () {
    function SignupPageModule() {
    }
    return SignupPageModule;
}());
SignupPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__signup__["a" /* SignupPage */]),
        ],
    })
], SignupPageModule);

//# sourceMappingURL=signup.module.js.map

/***/ }),

/***/ 221:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateAccountPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_account_account__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CreateAccountPage = (function () {
    function CreateAccountPage(navCtrl, formBuilder, accountProvider, navParams) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.accountProvider = accountProvider;
        this.navParams = navParams;
        this.createAccountForm = formBuilder.group({
            first_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            last_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            user_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            mobile_number: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            company_name: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])],
            credit_limit: ['', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].compose([__WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required])]
        });
    }
    CreateAccountPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad CreateAccountPage');
    };
    CreateAccountPage.prototype.onSubmit = function (value) {
        if (this.createAccountForm.valid) {
            var data = {
                un: value.user_name,
                fn: value.first_name,
                ln: value.last_name,
                mn: value.mobile_number,
                cn: value.company_name,
                cl: value.credit_limit
            };
            this.accountProvider.create_account(data).subscribe(function (response) {
                console.log(response);
            });
        }
    };
    return CreateAccountPage;
}());
CreateAccountPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-create-account',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/create-account/create-account.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Create Account</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding  class="bg-style">\n\n    <form [formGroup]="createAccountForm" (ngSubmit)="onSubmit(createAccountForm.value)">\n\n    <ion-list>\n\n        <ion-item>\n          <ion-label stacked>First Name</ion-label>\n          <ion-input type="text" formControlName="first_name"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label stacked>Last Name</ion-label>\n          <ion-input type="text" formControlName="last_name"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n            <ion-label stacked>User Name</ion-label>\n            <ion-input type="text" formControlName="user_name"></ion-input>\n          </ion-item>\n\n          <ion-item>\n              <ion-label stacked>Mobile Number</ion-label>\n              <ion-input type="text" formControlName="mobile_number"></ion-input>\n            </ion-item>\n\n            <ion-item>\n                <ion-label stacked>Company Name</ion-label>\n                <ion-input type="text" formControlName="company_name"></ion-input>\n              </ion-item>\n\n              <ion-item>\n                  <ion-label stacked>Credit Limit</ion-label>\n                  <ion-input type="text" formControlName= "credit_limit"></ion-input>\n                </ion-item>\n        \n      </ion-list>\n\n      <button ion-button full color="primary" style="margin-top: 20px;" type="submit">Create Distributor</button>\n\n      </form>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/create-account/create-account.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
        __WEBPACK_IMPORTED_MODULE_3__providers_account_account__["a" /* AccountProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], CreateAccountPage);

//# sourceMappingURL=create-account.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutUsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the AboutUsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AboutUsPage = (function () {
    function AboutUsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    AboutUsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AboutUsPage');
    };
    return AboutUsPage;
}());
AboutUsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-about-us',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/about-us/about-us.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>About</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="bg-style">\n  <div padding class="about-info">\n    <h4>Sales Easy</h4>\n\n    <ion-list no-lines>\n      <!-- <ion-item>\n        <ion-icon name="calendar" item-start></ion-icon>\n        <ion-label>Date</ion-label>\n        <ion-datetime displayFormat="MMM DD, YYYY" max="2056" [(ngModel)]="conferenceDate"></ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-icon name="pin" item-start></ion-icon>\n        <ion-label>Location</ion-label>\n        <ion-select>\n          <ion-option value="madison" selected>Madison, WI</ion-option>\n          <ion-option value="austin">Austin, TX</ion-option>\n          <ion-option value="chicago">Chicago, IL</ion-option>\n          <ion-option value="seattle">Seattle, WA</ion-option>\n        </ion-select>\n      </ion-item> -->\n    </ion-list>\n\n    <p>\n        Sales is not easy at all due to various factors.\n        Channel partners and manufacturers are not integrated.\n        Issue of credit sales and payment settlement period.\n        Lack of availability of real-time data.\n        Huge dependency on manpower for market forecast.\n        Erratic product supply- chain management.\n        Erratic raw material planning and inventory creation.\n        Less productivity of channel partners and sales team.\n    </p>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/about-us/about-us.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], AboutUsPage);

//# sourceMappingURL=about-us.js.map

/***/ }),

/***/ 227:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(246);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_create_account_create_account_module__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_invoices_invoices_module__ = __webpack_require__(165);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_order_details_order_details_module__ = __webpack_require__(172);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_retailers_list_retailers_list_module__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_edit_product_list_edit_product_list_module__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_distributor_distributor__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_retailer_retailer__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_product_product__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_account_account__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_order_order__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_distributor_list_distributor_list_module__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_login_login_module__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pages_order_review_order_review_module__ = __webpack_require__(171);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__pages_previous_orders_previous_orders_module__ = __webpack_require__(173);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__pages_product_list_product_list_module__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__pages_manufacturer_list_manufacturer_list_module__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__pages_place_order_tp_place_order_tp_module__ = __webpack_require__(176);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SalesEasy */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_5__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SalesEasy */], {}, {
                links: [
                    { loadChildren: '../pages/create-account/create-account.module#CreateAccountPageModule', name: 'CreateAccountPage', segment: 'create-account', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/distributor-list/distributor-list.module#DistributorListPageModule', name: 'DistributorListPage', segment: 'distributor-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/edit-product-list/edit-product-list.module#EditProductListPageModule', name: 'EditProductListPage', segment: 'edit-product-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/invoices/invoices.module#InvoicesPageModule', name: 'InvoicesPage', segment: 'invoices', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/manufacturer-list/manufacturer-list.module#ManufacturerListPageModule', name: 'ManufacturerListPage', segment: 'manufacturer-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-review/order-review.module#OrderReviewPageModule', name: 'OrderReviewPage', segment: 'order-review', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/order-details/order-details.module#OrderDetailsPageModule', name: 'OrderDetailsPage', segment: 'order-details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/previous-orders/previous-orders.module#PreviousOrdersPageModule', name: 'PreviousOrdersPage', segment: 'previous-orders', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/product-list/product-list.module#ProductListPageModule', name: 'ProductListPage', segment: 'product-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/place-order-tp/place-order-tp.module#PlaceOrderTpPageModule', name: 'PlaceOrderTpPage', segment: 'place-order-tp', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/retailers-list/retailers-list.module#RetailersListPageModule', name: 'RetailersListPage', segment: 'retailers-list', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/signup/signup.module#SignupPageModule', name: 'SignupPage', segment: 'signup', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_19__pages_distributor_list_distributor_list_module__["DistributorListPageModule"],
            __WEBPACK_IMPORTED_MODULE_25__pages_manufacturer_list_manufacturer_list_module__["ManufacturerListPageModule"],
            __WEBPACK_IMPORTED_MODULE_20__pages_login_login_module__["LoginPageModule"],
            __WEBPACK_IMPORTED_MODULE_21__pages_order_review_order_review_module__["OrderReviewPageModule"],
            __WEBPACK_IMPORTED_MODULE_22__pages_previous_orders_previous_orders_module__["PreviousOrdersPageModule"],
            __WEBPACK_IMPORTED_MODULE_23__pages_product_list_product_list_module__["ProductListPageModule"],
            __WEBPACK_IMPORTED_MODULE_24__pages_signup_signup_module__["SignupPageModule"],
            __WEBPACK_IMPORTED_MODULE_4__pages_edit_product_list_edit_product_list_module__["EditProductListPageModule"],
            __WEBPACK_IMPORTED_MODULE_3__pages_retailers_list_retailers_list_module__["RetailersListPageModule"],
            __WEBPACK_IMPORTED_MODULE_2__pages_order_details_order_details_module__["OrderDetailsPageModule"],
            __WEBPACK_IMPORTED_MODULE_1__pages_invoices_invoices_module__["InvoicesPageModule"],
            __WEBPACK_IMPORTED_MODULE_0__pages_create_account_create_account_module__["CreateAccountPageModule"],
            __WEBPACK_IMPORTED_MODULE_26__pages_place_order_tp_place_order_tp_module__["PlaceOrderTpPageModule"]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7_ionic_angular__["c" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* SalesEasy */],
            __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_12__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_13__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_6__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_7_ionic_angular__["d" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_14__providers_distributor_distributor__["a" /* DistributorProvider */],
            __WEBPACK_IMPORTED_MODULE_15__providers_retailer_retailer__["a" /* RetailerProvider */],
            __WEBPACK_IMPORTED_MODULE_16__providers_product_product__["a" /* ProductProvider */],
            __WEBPACK_IMPORTED_MODULE_17__providers_account_account__["a" /* AccountProvider */],
            __WEBPACK_IMPORTED_MODULE_18__providers_order_order__["a" /* OrderProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SignupPage = (function () {
    function SignupPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SignupPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad SignupPage');
    };
    return SignupPage;
}());
SignupPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-signup',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/signup/signup.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Signup</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-style" padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/signup/signup.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */]])
], SignupPage);

//# sourceMappingURL=signup.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SalesEasy; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_invoices_invoices__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_retailers_list_retailers_list__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_edit_product_list_edit_product_list__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(222);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(225);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_distributor_list_distributor_list__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_login_login__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_previous_orders_previous_orders__ = __webpack_require__(174);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__ = __webpack_require__(226);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_manufacturer_list_manufacturer_list__ = __webpack_require__(170);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_create_account_create_account__ = __webpack_require__(221);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_place_order_tp_place_order_tp__ = __webpack_require__(177);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};















var SalesEasy = (function () {
    function SalesEasy(platform, statusBar, splashScreen, events) {
        var _this = this;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.events = events;
        this.initializeApp();
        this.pages = [];
        events.subscribe('user_type_change', function (user_type) {
            _this.pages = [];
            if (user_type == 'distributor') {
                _this.pages.push({ title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] });
                _this.pages.push({ title: 'Manufacturers', component: __WEBPACK_IMPORTED_MODULE_12__pages_manufacturer_list_manufacturer_list__["a" /* ManufacturerListPage */] });
                _this.pages.push({ title: 'Products', component: __WEBPACK_IMPORTED_MODULE_2__pages_edit_product_list_edit_product_list__["a" /* EditProductListPage */] });
                _this.pages.push({ title: 'Retailers', component: __WEBPACK_IMPORTED_MODULE_1__pages_retailers_list_retailers_list__["a" /* RetailersListPage */] });
                _this.pages.push({ title: 'Invoices', component: __WEBPACK_IMPORTED_MODULE_0__pages_invoices_invoices__["a" /* InvoicesPage */] });
                _this.pages.push({ title: 'Order History', component: __WEBPACK_IMPORTED_MODULE_10__pages_previous_orders_previous_orders__["a" /* PreviousOrdersPage */] });
                _this.pages.push({ title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
                _this.pages.push({ title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
            }
            else if (user_type == 'retailer') {
                _this.pages.push({ title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] });
                _this.pages.push({ title: 'Place Order', component: __WEBPACK_IMPORTED_MODULE_8__pages_distributor_list_distributor_list__["a" /* DistributorListPage */] });
                _this.pages.push({ title: 'Order History', component: __WEBPACK_IMPORTED_MODULE_10__pages_previous_orders_previous_orders__["a" /* PreviousOrdersPage */] });
                _this.pages.push({ title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
                _this.pages.push({ title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
            }
            else if (user_type == 'employee') {
                _this.pages.push({ title: 'Home', component: __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */] });
                _this.pages.push({ title: 'Create Account', component: __WEBPACK_IMPORTED_MODULE_13__pages_create_account_create_account__["a" /* CreateAccountPage */] });
                _this.pages.push({ title: 'Place Order', component: __WEBPACK_IMPORTED_MODULE_14__pages_place_order_tp_place_order_tp__["a" /* PlaceOrderTpPage */] });
                _this.pages.push({ title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
                _this.pages.push({ title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
            }
            else {
                _this.pages.push({ title: 'Order History', component: __WEBPACK_IMPORTED_MODULE_10__pages_previous_orders_previous_orders__["a" /* PreviousOrdersPage */] });
                _this.pages.push({ title: 'About Us', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
                _this.pages.push({ title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_11__pages_about_us_about_us__["a" /* AboutUsPage */] });
            }
        });
    }
    SalesEasy.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.checkPreviousAuthorization();
        });
    };
    SalesEasy.prototype.openPage = function (page) {
        if (page.title == 'Logout') {
            this.logout();
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    SalesEasy.prototype.logout = function () {
        window.localStorage.removeItem('username');
        window.localStorage.removeItem('password');
        window.localStorage.removeItem('token');
        window.localStorage.removeItem('partnerId');
        window.localStorage.removeItem('user_type');
        this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */]);
        this.nav.popToRoot();
    };
    SalesEasy.prototype.checkPreviousAuthorization = function () {
        if ((window.localStorage.getItem('username') === "undefined" || window.localStorage.getItem('username') === null) &&
            (window.localStorage.getItem('token') === "undefined" || window.localStorage.getItem('token') === null) &&
            (window.localStorage.getItem('password') === "undefined" || window.localStorage.getItem('password') === null)) {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_9__pages_login_login__["a" /* LoginPage */];
        }
        else {
            this.events.publish('user_type_change', window.localStorage.getItem('user_type'));
            this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */];
        }
    };
    return SalesEasy;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["h" /* Nav */])
], SalesEasy.prototype, "nav", void 0);
SalesEasy = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/app/app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_ionic_angular__["k" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
        __WEBPACK_IMPORTED_MODULE_4_ionic_angular__["b" /* Events */]])
], SalesEasy);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderProvider = (function () {
    function OrderProvider(http) {
        this.http = http;
        this.url = "http://www.saleseasy.in/apiv1/place_order/";
    }
    OrderProvider.prototype.submitOrder = function (productIds, quantities, token, distributorId, manufacturerId) {
        var placed_to_user_id;
        var user_type = window.localStorage.getItem('user_type');
        if (user_type == 'retailer') {
            placed_to_user_id = distributorId;
        }
        else if (user_type == 'distributor') {
            placed_to_user_id = manufacturerId;
        }
        else if (user_type == 'employee') {
            placed_to_user_id = manufacturerId;
        }
        var payload = {
            place_order_to: placed_to_user_id,
            placed_for: distributorId,
            products: productIds,
            quantity: quantities
        };
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return this.http.post(this.url, payload, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderProvider.prototype.get_my_orders = function () {
        var orders_url = "http://www.saleseasy.in/apiv1/orders/";
        var headers = this.create_header();
        return this.http.get(orders_url, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderProvider.prototype.get_my_order_details = function (order_id) {
        var orders_url = "http://www.saleseasy.in/apiv1/order_detail/?id=" + order_id;
        var headers = this.create_header();
        return this.http.get(orders_url, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderProvider.prototype.get_my_invoices = function () {
        var invoices_url = "http://www.saleseasy.in/apiv1/invoices";
        var headers = this.create_header();
        return this.http.get(invoices_url, { headers: headers }).map(function (res) { return res.json(); });
    };
    OrderProvider.prototype.create_header = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return headers;
    };
    return OrderProvider;
}());
OrderProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], OrderProvider);

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DistributorProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DistributorProvider = (function () {
    function DistributorProvider(http) {
        this.http = http;
        console.log('Hello DistributorProvider Provider');
        this.url = "http://www.saleseasy.in/apiv1/distributor/";
    }
    DistributorProvider.prototype.getDistributorList = function () {
        var headers = this.create_header();
        return this.http.get(this.url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DistributorProvider.prototype.getManufacturerList = function () {
        var headers = this.create_header();
        var url = "http://www.saleseasy.in/apiv1/manufacturer/";
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DistributorProvider.prototype.getListOfConnectedDistributors = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        var url = "http://www.saleseasy.in/apiv1/emp_connected_distributors/";
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    DistributorProvider.prototype.create_header = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return headers;
    };
    return DistributorProvider;
}());
DistributorProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], DistributorProvider);

//# sourceMappingURL=distributor.js.map

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_product_product__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_review_order_review__ = __webpack_require__(162);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProductListPage = (function () {
    function ProductListPage(navCtrl, navParams, productProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.productProvider = productProvider;
        this.alertCtrl = alertCtrl;
        if (navParams.data['distributor'] != undefined) {
            this.distributorId = navParams.data['distributor'].id;
        }
        if (navParams.data['manufacturer'] != undefined) {
            this.manufacturerId = navParams.data['manufacturer'].id;
        }
    }
    ProductListPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        if (this.distributorId != undefined) {
            this.productProvider.getProductList(this.distributorId).subscribe(function (products) {
                console.log(products);
                products.forEach(function (element) {
                    element.count = 0;
                });
                _this.products = products;
            }, function (error) {
                console.log(error);
            });
        }
        else if (this.manufacturerId != undefined) {
            this.productProvider.getProductList(this.manufacturerId).subscribe(function (products) {
                console.log(products);
                products.forEach(function (element) {
                    element.count = 0;
                });
                _this.products = products;
            }, function (error) {
                console.log(error);
            });
        }
    };
    ProductListPage.prototype.decrease = function (event, product) {
        if (product.count == undefined || product.count <= 1) {
            product.count = 0;
        }
        else {
            product.count -= 1;
        }
    };
    ProductListPage.prototype.increase = function (event, product) {
        if (product.count == undefined) {
            product.count = 0;
        }
        product.count += 1;
    };
    ProductListPage.prototype.onChangeCount = function (event, product) {
        product.count = parseInt(event.value);
    };
    ProductListPage.prototype.checkout = function (event) {
        var selectedProducts = this.products.filter(function (product) {
            return product.count > 0;
        });
        if (selectedProducts.length > 0) {
            this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_review_order_review__["a" /* OrderReviewPage */], {
                products: selectedProducts,
                distributorId: this.distributorId,
                manufacturerId: this.manufacturerId
            });
        }
        else {
            var alert_1 = this.alertCtrl.create({
                title: 'Error',
                subTitle: 'Please select some product to checkout.',
                buttons: ['OK']
            });
            alert_1.present();
        }
    };
    return ProductListPage;
}());
ProductListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-product-list',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/product-list/product-list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n    <ion-buttons end>\n        <button ion-button (click)="checkout($event)"> Checkout </button>\n      </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="bg-style" padding>\n    <ion-card ion-item *ngFor="let product of products">\n      <ion-card-header>\n        <ion-row align-items-center> {{ product.base.name }} </ion-row>\n      </ion-card-header>\n      <ion-card-content>\n        <ion-row align-items-center>\n          <ion-col>\n            <ion-row align-items-center> Packing: {{ product.base.packing }} </ion-row>\n            <ion-row align-items-center> Code: {{ product.base.code}} </ion-row>\n          </ion-col>\n          <ion-col>\n            <ion-col>\n              <button ion-button round icon-only color="danger" icon-left (click)="decrease($event, product)">\n                <ion-icon name="remove"></ion-icon>\n              </button>\n            </ion-col>\n            <ion-item>\n              <ion-input type="number" (ionChange)=\'onChangeCount($event, product)\' value="{{product.count}}"> </ion-input>\n            </ion-item>\n            <ion-col>\n              <button ion-button round icon-only color="secondary" icon-right (click)="increase($event, product)">\n                <ion-icon name="add"></ion-icon>\n              </button>\n            </ion-col>\n          </ion-col>\n\n        </ion-row>\n      </ion-card-content>\n    </ion-card>\n</ion-content>'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/product-list/product-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_product_product__["a" /* ProductProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], ProductListPage);

//# sourceMappingURL=product-list.js.map

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AccountProvider = (function () {
    function AccountProvider(http) {
        this.http = http;
        this.login_url = "http://www.saleseasy.in/apiv1/auth/";
        this.account_url = "http://www.saleseasy.in/apiv1/account/";
    }
    AccountProvider.prototype.login = function (username, password) {
        return this.http.post(this.login_url, { 'username': username, 'password': password }).map(function (res) { return res.json(); });
    };
    AccountProvider.prototype.fetch_account = function () {
        var headers = this.create_header();
        return this.http.get(this.account_url, { headers: headers }).map(function (res) { return res.json(); });
    };
    AccountProvider.prototype.create_account = function (data) {
        var url = "http://www.saleseasy.in/apiv1/create_account/";
        var headers = this.create_header();
        return this.http.post(url, data).map(function (res) { return res.json(); });
    };
    AccountProvider.prototype.create_header = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return headers;
    };
    return AccountProvider;
}());
AccountProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], AccountProvider);

//# sourceMappingURL=account.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the ProductProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ProductProvider = (function () {
    function ProductProvider(http) {
        this.http = http;
        console.log('Hello ProductProvider Provider');
        this.url = "http://www.saleseasy.in/apiv1/product/?id=";
    }
    ProductProvider.prototype.getProductList = function (partnerId) {
        var headers = this.create_header();
        return this.http.get(this.url + partnerId, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProductProvider.prototype.getMyProductList = function () {
        var headers = this.create_header();
        var url = "http://www.saleseasy.in/apiv1/my_products/";
        return this.http.get(url, { headers: headers }).map(function (res) { return res.json(); });
    };
    ProductProvider.prototype.create_header = function () {
        var token = window.localStorage.getItem('token');
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Token ' + token);
        return headers;
    };
    return ProductProvider;
}());
ProductProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
], ProductProvider);

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderDetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_order_order__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OrderDetailsPage = (function () {
    function OrderDetailsPage(navCtrl, navParams, orderProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.orderProvider = orderProvider;
        this.order_id = navParams.data['order_id'];
    }
    OrderDetailsPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.orderProvider.get_my_order_details(this.order_id).subscribe(function (response) {
            _this.order_details = response['data'];
            console.log(response['data']);
        });
    };
    return OrderDetailsPage;
}());
OrderDetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-order-details',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/order-details/order-details.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Order Items</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="bg-style" padding>\n  <ion-card ion-item *ngFor="let item of order_details">\n    <ion-card-content>\n      <ion-item>\n        <h3>Product: {{ item.product.base.name }} (Code: {{item.product.base.code}})</h3>\n        <h3>Packing: {{item.product.base.packing}}</h3>\n        <h3>Quantity: {{item.item_quantity}}</h3>\n        <h3>Price: {{item.product.selling_price}}</h3>  \n      </ion-item>\n    </ion-card-content>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/order-details/order-details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_order_order__["a" /* OrderProvider */]])
], OrderDetailsPage);

//# sourceMappingURL=order-details.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_account_account__ = __webpack_require__(51);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(nav, accountProvider) {
        this.nav = nav;
        this.accountProvider = accountProvider;
        this.nav = nav;
    }
    HomePage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.accountProvider.fetch_account().subscribe(function (response) {
            var data = response['data'];
            _this.account = data;
            _this.user = data.user;
            _this.user_type = response['type'];
            if (_this.user_type == 'employee') {
                _this.account = data['partner'];
                _this.user.first_name = data["first_name"];
                _this.user.last_name = data["last_name"];
                _this.user.mobile_no = data["mobile_no"];
            }
        });
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/amresh/Projects/sales-easy/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="bg-style" *ngIf="account != undefined">\n    <ion-list inset  no-lines>\n        <ion-item>  </ion-item>\n        <ion-item>  </ion-item>    \n  </ion-list>        \n    \n    <div padding-top text-center *ngIf="user">\n        <img src="http://www.gravatar.com/avatar?d=mm&s=140" alt="avatar">\n        <h2>{{user.first_name}}</h2>  \n  <ion-list inset *ngIf="user_type != \'employee\'">\n    <ion-item>Company Name: {{account.company_name}} </ion-item>\n    <ion-item>Company Address: {{account.company_address}}, PIN: {{account.pin_code}}</ion-item>\n    <ion-item> Mobile Number: {{account.mobile_number}}</ion-item>\n    <ion-item> GSTIN: {{account.GSTIN}}</ion-item>\n    <ion-item> PAN: {{account.PAN}}</ion-item>\n    <ion-item> Email: {{user.email}}</ion-item>\n  </ion-list>\n  <ion-list inset *ngIf="user_type == \'employee\'">\n      <ion-item>Company Name: {{account.company_name}} </ion-item>\n      <ion-item> Mobile Number: {{user.mobile_no}}</ion-item>\n      <ion-item> Email: {{user.email}}</ion-item>\n      <ion-item> User Type: {{user_type}}</ion-item>\n    </ion-list>\n</div>  \n\n</ion-content>\n'/*ion-inline-end:"/Users/amresh/Projects/sales-easy/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_account_account__["a" /* AccountProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ })

},[227]);
//# sourceMappingURL=main.js.map