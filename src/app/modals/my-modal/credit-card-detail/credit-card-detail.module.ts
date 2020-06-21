import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreditCardDetailPageRoutingModule } from './credit-card-detail-routing.module';

import { CreditCardDetailPage } from './credit-card-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreditCardDetailPageRoutingModule
  ],
  declarations: [CreditCardDetailPage]
})
export class CreditCardDetailPageModule {}
