import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PreviousOrdersPage } from './previous-orders';

@NgModule({
  declarations: [
    PreviousOrdersPage,
  ],
  imports: [
    IonicPageModule.forChild(PreviousOrdersPage),
  ],
})
export class PreviousOrdersPageModule {}
