import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RetailersListPage } from './retailers-list';

@NgModule({
  declarations: [
    RetailersListPage,
  ],
  imports: [
    IonicPageModule.forChild(RetailersListPage),
  ],
})
export class RetailersListPageModule {}
