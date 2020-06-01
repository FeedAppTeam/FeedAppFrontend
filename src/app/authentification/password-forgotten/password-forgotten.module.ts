import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PasswordForgottenPageRoutingModule } from './password-forgotten-routing.module';

import { PasswordForgottenPage } from './password-forgotten.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PasswordForgottenPageRoutingModule
  ],
  declarations: [PasswordForgottenPage]
})
export class PasswordForgottenPageModule {}
