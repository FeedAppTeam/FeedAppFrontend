import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { Camera } from "@ionic-native/camera/ngx";

import { IonicModule } from "@ionic/angular";

import { AccountPageRoutingModule } from "./account-routing.module";

import { AccountPage } from "./account.page";

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, AccountPageRoutingModule],
  declarations: [AccountPage],
})
export class AccountPageModule {}
