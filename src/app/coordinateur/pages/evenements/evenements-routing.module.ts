import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EvenementsPage } from './evenements.page';

const routes: Routes = [
  {
    path: '',
    component: EvenementsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EvenementsPageRoutingModule {}
