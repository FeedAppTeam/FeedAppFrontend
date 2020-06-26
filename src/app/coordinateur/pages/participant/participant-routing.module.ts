import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ParticipantPage } from './participant.page';

const routes: Routes = [
  {
    path: '',
    component: ParticipantPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ParticipantPageRoutingModule {}
