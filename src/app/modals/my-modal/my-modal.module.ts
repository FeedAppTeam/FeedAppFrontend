import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { MyModalPageRoutingModule } from './my-modal-routing.module';
import { MyModalPage } from './my-modal.page';
import { CreditCardDetailPage } from './credit-card-detail/credit-card-detail.page';
import { PaypalDetailPage } from './paypal-detail/paypal-detail.page';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
    path: 'credit-card-detail',
    component: CreditCardDetailPage
  },
  {
    path: 'paypal-detail',
    component: PaypalDetailPage,
  }
];
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MyModalPageRoutingModule,
  ],
  exports: [RouterModule],
  declarations: [MyModalPage],
})
export class MyModalPageModule {}