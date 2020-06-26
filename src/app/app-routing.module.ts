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
    path: 'coordinateur',
    loadChildren: () => import('./coordinateur/coordinateur.module').then( m => m.CoordinateurPageModule)
  },
  {
    path: 'password-forgotten',
    loadChildren: () => import('./authentification/password-forgotten/password-forgotten.module').then( m => m.PasswordForgottenPageModule)
  },
  {
    path: 'coordinateur',
    loadChildren: () => import('./coordinateur/coordinateur.module').then( m => m.CoordinateurPageModule)
  },
  {
    path: 'chef',
    loadChildren: () => import('./coordinateur/pages/chef/chef.module').then( m => m.ChefPageModule)
  },
  {
    path: 'participant',
    loadChildren: () => import('./coordinateur/pages/participant/participant.module').then( m => m.ParticipantPageModule)
  },
  {
    path: 'evenements',
    loadChildren: () => import('./coordinateur/pages/evenements/evenements.module').then( m => m.EvenementsPageModule)
  },
  {
    path: 'chef',
    loadChildren: () => import('./coordinateur/pages/chef/chef.module').then( m => m.ChefPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
