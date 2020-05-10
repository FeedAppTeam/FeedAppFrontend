import { Component, ViewChildren, QueryList } from '@angular/core';

import { Platform, IonRouterOutlet } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
//import { Toast } from '@ionic-native/toast/ngx';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  //code for exit app
  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  // set up hardware back button event.
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;

  showSplash = true;
  versionType:any;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private device: Device,
    private router: Router,
    //private toast: Toast
    public toastController: ToastController
  ) {
    this.initializeApp();
    this.backButtonEvent();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.versionType = this.device.version; 
      this.statusBar.styleDefault();   
      this.splashScreen.hide();

      if (this.platform.is('android')) {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString("#0B5394");

        if(this.versionType != null && this.cmpVersions(this.versionType, "6.0") < 0) {
          this.notConformeDevice ();
        }else {
          timer(3000).subscribe(() => this.showSplash = false);
        }
      }else {
        timer(3000).subscribe(() => this.showSplash = false);
      }
      
      
    });
  }

  cmpVersions (a, b) {
    let i, diff;
    var regExStrip0 = /(\.0+)+$/;
    var segmentsA = a.replace(regExStrip0, '').split('.');
    var segmentsB = b.replace(regExStrip0, '').split('.');
    var l = Math.min(segmentsA.length, segmentsB.length);

    for (i = 0; i < l; i++) {
        diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
        if (diff) {
            return diff;
        }
    }
    return segmentsA.length - segmentsB.length;
  }

  async notConformeDevice () {
    const toast = await this.toastController.create({
      message: 'FeedApp is not compatible with your Android version',
      duration: 2000,
      position: 'bottom'
    });
    toast.present();
    timer(3000).subscribe(() =>  navigator['app'].exitApp()); 
  }
  
  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/home') {
          if (new Date().getTime() - this.lastTimeBackPress < this.timePeriodToExit) {
            // this.platform.exitApp(); // Exit from app
            navigator['app'].exitApp(); // work in ionic 4

          } else {
            const toast = await this.toastController.create({
              message: 'Press back again to exit App.',
              duration: 2000,
              position: 'bottom'
            });         
            toast.present();
            this.lastTimeBackPress = new Date().getTime();
          }
        }
      });
    });
  }
}
