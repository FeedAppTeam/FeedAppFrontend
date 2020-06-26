import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ParticipantPageRoutingModule } from './participant-routing.module';

import { ParticipantPage } from './participant.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ParticipantPageRoutingModule
  ],
  declarations: [ParticipantPage]
})
export class ParticipantPageModule {}
