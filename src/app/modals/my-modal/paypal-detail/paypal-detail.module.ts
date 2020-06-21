import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PaypalDetailPageRoutingModule } from './paypal-detail-routing.module';
import { PaypalDetailPage } from './paypal-detail.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaypalDetailPageRoutingModule
  ],
  declarations: [PaypalDetailPage]
})
export class PaypalDetailPageModule {}
