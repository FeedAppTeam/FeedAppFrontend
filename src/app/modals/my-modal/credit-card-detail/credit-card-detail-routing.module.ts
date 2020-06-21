import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CreditCardDetailPage } from './credit-card-detail.page';

const routes: Routes = [
  {
    path: '',
    component: CreditCardDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CreditCardDetailPageRoutingModule {}
