import { NgModule } from '@angular/core';
import {CanActivate, PreloadAllModules, RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'event-details/:id',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'auth/signIn',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'auth/signUp',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./account/account.module').then( m => m.AccountPageModule),
    canActivate : [AuthGuard]
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'password-forgotten',
    loadChildren: () => import('./authentification/password-forgotten/password-forgotten.module').then( m => m.PasswordForgottenPageModule)
  },
  {
    path: 'my-modal',
    loadChildren: () => import('./modals/my-modal/my-modal.module').then( m => m.MyModalPageModule)
  },
  {
    path: 'credit-card-detail',
    loadChildren: () => import('./modals/my-modal/credit-card-detail/credit-card-detail.module').then( m => m.CreditCardDetailPageModule)
  },
  {
    path: 'paypal-detail',
    loadChildren: () => import('./modals/my-modal/paypal-detail/paypal-detail.module').then( m => m.PaypalDetailPageModule)
  },

];

@NgModule({
  
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
