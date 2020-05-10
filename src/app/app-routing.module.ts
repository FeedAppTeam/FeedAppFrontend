import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  {
    path: 'create-event',
    loadChildren: () => import('./create-event/create-event.module').then( m => m.CreateEventPageModule)
  },
  {
    path: 'event-details',
    loadChildren: () => import('./event-details/event-details.module').then( m => m.EventDetailsPageModule)
  },
  {
    path: 'auth/signIn',
    loadChildren: () => import('./authentification/authentification.module').then( m => m.AuthentificationPageModule)
  },
  {
    path: 'auth/signUp',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },  {
    path: 'contact',
    loadChildren: () => import('./contact/contact.module').then( m => m.ContactPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
