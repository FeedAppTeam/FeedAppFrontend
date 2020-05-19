import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {FormsModule} from '@angular/forms';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';
import { Device } from '@ionic-native/device/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule  } from '@angular/common/http';

import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';
import { Camera } from '@ionic-native/camera/ngx';
import {AvatarDialogComponent} from "./avatar-dialog/avatar-dialog.component";

@NgModule({
  declarations: [AppComponent, HeaderComponent, AvatarDialogComponent],
  entryComponents: [AvatarDialogComponent],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      FormsModule,
      IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    AppAvailability,
    Device,
    ImagePicker,
    File,
    Camera,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

