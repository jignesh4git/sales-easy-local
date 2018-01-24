import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AccountProvider } from '../../providers/account/account'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  account: any;
  user_type: any;
  user: any;

  constructor(public nav: NavController,
    private accountProvider: AccountProvider,
  ) {
    this.nav = nav;
  }

  ionViewWillEnter() {
    this.accountProvider.fetch_account().subscribe(response => {
      let data = response['data'];
      this.account = data;
      this.user = data.user;
      this.user_type = response['type'];
      if (this.user_type == 'employee') {
        this.account = data['partner'];
        this.user.first_name = data["first_name"];
        this.user.last_name = data["last_name"];
        this.user.mobile_no = data["mobile_no"];
      }
    });
  }
}
