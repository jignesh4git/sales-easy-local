import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditProductListPage } from './edit-product-list';

@NgModule({
  declarations: [
    EditProductListPage,
  ],
  imports: [
    IonicPageModule.forChild(EditProductListPage),
  ],
})
export class EditProductListPageModule {}
