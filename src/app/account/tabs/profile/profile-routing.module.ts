import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { ProfilePage } from "./profile.page";
import { EditProfileComponent } from "./edit-profile.component";
import { ChangePasswordComponent } from "./change-password.component";
import { MyteamComponent } from "./myteam.component";

const routes: Routes = [
  {
    path: '',
    component: ProfilePage,
    children:[
      {
        path: 'editprofile',
        component: EditProfileComponent,
      },
      {
        path: 'changepassword',
        component: ChangePasswordComponent
      },
      {
        path: 'myteam',
        component: MyteamComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfilePageRoutingModule {}
