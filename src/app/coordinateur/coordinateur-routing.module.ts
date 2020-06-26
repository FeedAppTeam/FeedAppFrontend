import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoordinateurPage } from './coordinateur.page';

const routes: Routes = [
  {
    path: '',
    component: CoordinateurPage,
  children: [
  {
    path: 'chef',
    loadChildren: () => import('./pages/chef/chef.module').then( m => m.ChefPageModule)
  },
  {
    path: 'participant',
    loadChildren: () => import('./pages/participant/participant.module').then( m => m.ParticipantPageModule)
  },
  {
    path: 'evenements',
    loadChildren: () => import('./pages/evenements/evenements.module').then( m => m.EvenementsPageModule)
  }
  ]
},
  {
    path: '',
    redirectTo: '/account/chef',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoordinateurPageRoutingModule {}
