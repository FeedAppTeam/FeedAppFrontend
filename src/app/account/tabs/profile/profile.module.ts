import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ProfilePageRoutingModule } from './profile-routing.module';

import { ProfilePage } from './profile.page';
import {EditProfileComponent} from './edit-profile.component'
import { ChangePasswordComponent } from './change-password.component';
import { MyteamComponent } from './myteam.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProfilePageRoutingModule,
  ],
  declarations: [ProfilePage,EditProfileComponent,ChangePasswordComponent,MyteamComponent]
})
export class ProfilePageModule {}
