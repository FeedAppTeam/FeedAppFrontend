import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinateurPage } from './coordinateur.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinateurPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinateurPageRoutingModule {}
