import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthentificationPage } from './authentification.page';

const routes: Routes = [
  {
    path: '',
    component: AuthentificationPage
  },  {
    path: 'password-forgotten',
    loadChildren: () => import('./password-forgotten/password-forgotten.module').then( m => m.PasswordForgottenPageModule)
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AuthentificationPageRoutingModule {}
