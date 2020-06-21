import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaypalDetailPage } from './paypal-detail.page';
// var path = require("./paypal-detail.module");
// var Router = require('./modules/router/router');
// var router = new Router(path.join(__dirname,'routes'));
const routes: Routes = [
  {
    path: '',
    component: PaypalDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaypalDetailPageRoutingModule {}
