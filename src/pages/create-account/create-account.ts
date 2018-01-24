import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AccountProvider } from '../../providers/account/account'

@IonicPage()
@Component({
  selector: 'page-create-account',
  templateUrl: 'create-account.html',
})
export class CreateAccountPage {

  createAccountForm: FormGroup;

  constructor(public navCtrl: NavController, 
    public formBuilder: FormBuilder,
    private accountProvider: AccountProvider,
    public navParams: NavParams) {

      this.createAccountForm = formBuilder.group({
        first_name: ['', Validators.compose([Validators.required])],
        last_name: ['', Validators.compose([Validators.required])],
        user_name: ['', Validators.compose([Validators.required])],
        mobile_number: ['', Validators.compose([Validators.required])],
        company_name: ['', Validators.compose([Validators.required])],
        credit_limit: ['', Validators.compose([Validators.required])]
    });

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreateAccountPage');
  }

  onSubmit(value: any): void {
    if (this.createAccountForm.valid) {
      let data = {
        un : value.user_name,
        fn : value.first_name,
        ln : value.last_name,
        mn : value.mobile_number,
        cn : value.company_name,
        cl : value.credit_limit
      }
      this.accountProvider.create_account(data).subscribe(response => {
        console.log(response)
      });
    }
}


}
