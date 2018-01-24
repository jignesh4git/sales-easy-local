import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ManufacturerListPage } from './manufacturer-list';

@NgModule({
  declarations: [
    ManufacturerListPage,
  ],
  imports: [
    IonicPageModule.forChild(ManufacturerListPage),
  ],
})
export class ManufacturerListPageModule {}
