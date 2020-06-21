import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MyModalPage } from './my-modal.page';

const routes: Routes = [
  {
    path: '',
    component: MyModalPage
  },
  {
    path: 'credit-card-detail',
    loadChildren: () => import('./credit-card-detail/credit-card-detail.module').then( m => m.CreditCardDetailPageModule)
  },
  {
    path: 'paypal-detail',
    loadChildren: () => import('./paypal-detail/paypal-detail.module').then( m => m.PaypalDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MyModalPageRoutingModule {}
