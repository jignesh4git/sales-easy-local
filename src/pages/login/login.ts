import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HomePage } from '../home/home';
import { AccountProvider } from '../../providers/account/account'
import { AlertController } from 'ionic-angular';

@IonicPage()
@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
})
export class LoginPage {

    authForm: FormGroup;

    constructor(public nav: NavController,
        public navParams: NavParams,
        public formBuilder: FormBuilder,
        private accountProvider: AccountProvider,
        public alertCtrl: AlertController,
        public events: Events) {

        this.nav = nav;

        this.authForm = formBuilder.group({
            username: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(30)])],
            password: ['', Validators.compose([Validators.required, Validators.minLength(8)])]
        });
    }

    onSubmit(value: any): void {
        if (this.authForm.valid) {

            this.accountProvider.login(value.username, value.password).subscribe(response => {
                window.localStorage.setItem('username', value.username);
                window.localStorage.setItem('password', value.password);
                window.localStorage.setItem('token', response['token']);

                this.accountProvider.fetch_account().subscribe(response => {
                    window.localStorage.setItem('user_type', response['type']);
                    window.localStorage.setItem('partnerId', response['data'].user.id);     
                    if (response['type'] == 'employee') {
                        window.localStorage.setItem('employerId', response['data']['partner']['user']['id'])
                    }            
                    this.events.publish('user_type_change', response['type']);
                    this.nav.setRoot(HomePage);
                });
            }, error => {
                console.log(error);
                let alert = this.alertCtrl.create({
                    title: 'Invalid',
                    subTitle: 'Please enter correct username or password!',
                    buttons: ['OK']
                });
                alert.present();
            });
        }
    }


}
