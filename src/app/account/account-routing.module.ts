import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AccountPage } from './account.page';

const routes: Routes = [
  {
    path: '',
    component: AccountPage,
    children: [
      {
        path: 'profile',
        loadChildren: () => import('./tabs/profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path: 'actions',
        loadChildren: () => import('./tabs/actions/actions.module').then( m => m.ActionsPageModule)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./tabs/notifications/notifications.module').then( m => m.NotificationsPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/account/profile',
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccountPageRoutingModule {}
