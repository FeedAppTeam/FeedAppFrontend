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
import { Camera } from '@ionic-native/camera/ngx';
import { Platform } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { IonicStorageModule } from '@ionic/storage';
import { HttpClientModule  } from '@angular/common/http';

import {ImagePicker} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {AvatarDialogComponent} from './avatar-dialog/avatar-dialog.component';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import { Clipboard } from '@ionic-native/clipboard/ngx';

import {PopoverComponent} from './popover/popover.component';

import { HttpModule } from '@angular/http'; 


@NgModule({
  declarations: [AppComponent, HeaderComponent, AvatarDialogComponent, PopoverComponent],
  entryComponents: [AvatarDialogComponent, PopoverComponent],
  imports: [
      BrowserModule,
      HttpClientModule,
      IonicModule.forRoot(),
      AppRoutingModule,
      HttpModule,
      FormsModule,
      IonicStorageModule.forRoot()
  
  ],
  providers: [
    Camera,
    StatusBar,
    SplashScreen,
    Platform,
    InAppBrowser,
    AppAvailability,
    Device,
    ImagePicker,
    File,
    Camera,
    SocialSharing,
    Deeplinks,
    Clipboard,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },

  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

