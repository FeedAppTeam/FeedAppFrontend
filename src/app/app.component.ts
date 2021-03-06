import {Component, ViewChildren, QueryList, NgZone} from '@angular/core';

import {Platform, IonRouterOutlet, AlertController, MenuController} from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { timer } from 'rxjs';
import { Device } from '@ionic-native/device/ngx';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import {TokenStorageService} from './services/token-storage.service';
import {JwtResponse} from './models/jwt-response';
import { Deeplinks } from '@ionic-native/deeplinks/ngx';
import {EventDetailsPage} from './event-details/event-details.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {

  @ViewChildren(IonRouterOutlet) routerOutlets: QueryList<IonRouterOutlet>;
  lastTimeBackPress = 0;
  timePeriodToExit = 2000;
  errorVersion = true;
  showSplash = true;
  versionType: any;

  navigate: any;
  srcAvatar = 'assets/avatar/avatar7.png';
  currentUser: JwtResponse;
  oldItem = null;
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private device: Device,
    private router: Router,
    public toastController: ToastController,
    public alertController: AlertController,
    public token: TokenStorageService,
    private menu: MenuController,
    private deeplinks: Deeplinks,
    private zone: NgZone,
    public storage: Storage
  ) {
      this.initializeApp();
      this.backButtonEvent();
      this.sideMenu();
      this.getCurrentUser();
  }
  showintro() {
    this.storage.get('introShown').then((result) => {
      if (result) {
        this.router.navigate(['/home']);
      } else {
        this.router.navigate(['/intro']);
        this.storage.set('introShown', true);
      }
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.versionType = this.device.version;
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      if (this.platform.is('android')) {
        this.statusBar.styleLightContent();
        this.statusBar.backgroundColorByHexString('#0B5394');
        this.initializeDeepLink();
        this.showintro();
        if (
          this.versionType != null &&
          this.cmpVersions(this.versionType, '6.0') < 0
        ) {
          this.notConformeDevice();
        } else {
          timer(3000).subscribe(() => {
              this.showSplash = false;
          });
        }
      } else {
        timer(3000).subscribe(() => this.showSplash = false);
      }
    });
  }

  cmpVersions(a, b) {
    let i, diff;
    const regExStrip0 = /(\.0+)+$/;
    const segmentsA = a.replace(regExStrip0, '').split('.');
    const segmentsB = b.replace(regExStrip0, '').split('.');
    const l = Math.min(segmentsA.length, segmentsB.length);

    for (i = 0; i < l; i++) {
        diff = parseInt(segmentsA[i], 10) - parseInt(segmentsB[i], 10);
        if (diff) {
            return diff;
        }
    }
    return segmentsA.length - segmentsB.length;
  }

  async notConformeDevice() {
    const alert = await this.alertController.create({
          header: 'Error',
          message: '<strong>FeedApp</strong> is not compatible with your <strong>Android version</strong>',
          backdropDismiss: false,
          buttons: [
              {
                  text: 'Leave',
                  handler: () => {
                      navigator['app'].exitApp();
                  }
              }
          ]
      });
    timer(3000).subscribe(async () => {
        this.showSplash = false;
        this.errorVersion = false;
        await alert.present();
    });
  }

  // active hardware back button
  backButtonEvent() {
    this.platform.backButton.subscribe(async () => {

      this.routerOutlets.forEach(async (outlet: IonRouterOutlet) => {
        if (outlet && outlet.canGoBack()) {
          outlet.pop();
        } else if (this.router.url === '/home' || this.router.url.includes('/event-details/')) {
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

    sideMenu() {
        this.navigate =
            [
                {
                    title : 'Home',
                    url   : '/home',
                    active: true,
                    icon  : 'home'
                },
                {
                    title : 'Account',
                    url   : '/account/profile',
                    active: false,
                    icon  : 'person-outline'
                },
                {
                    title : 'Add Event',
                    url   : '/create-event',
                    active: false,
                    icon  : 'add-outline'
                },
                {
                    title : 'Contact',
                    url   : '/contact',
                    active: false,
                    icon  : 'chatbubble-outline'
                },
                {
                    title : 'Sign out',
                    url : null,
                    active: false,
                    function   : 'callback',
                    icon  : 'exit-outline'
                }
            ];
        this.oldItem = this.navigate[0];
    }

    sideMenuAction(e , pages) {
      if (pages.url !== null) {
          this.oldItem.active = false;
          this.router.navigate([pages.url]);
          const elem = document.getElementsByClassName('active')[0];
          elem.classList.toggle('active');
          pages.active = true;
          this.oldItem = pages;
      } else if (pages.function !== undefined && pages.function !== null) {
          this.logOut();
      }
    }

    async getCurrentUser() {
        this.token.getObservableUser().subscribe((data) => {
            this.currentUser = data;
            if ((typeof this.currentUser) === 'string' ) {
                this.currentUser = JSON.parse(data);
            }
            this.srcAvatar = (this.currentUser !== null && this.currentUser.img !== undefined) ? this.currentUser.img : this.srcAvatar;
        });
    }

    async logOut() {
        const alert = await this.alertController.create({
            header: 'Logout',
            message: 'You really want to logout ',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'No'
                },
                {
                    text: 'Yes',
                    handler: () => {
                        this.token.signOut();
                        this.oldItem.active = false;
                        this.navigate[0].active = true;
                        this.oldItem = this.navigate[0];
                        const elem = document.getElementsByClassName('active')[0];
                        elem.classList.toggle('active');
                    }
                }
            ]
        });
        this.menu.close('first');
        alert.present();
    }
    initializeDeepLink() {
        this.deeplinks.route({
            '/event-details/:id': EventDetailsPage
        }).subscribe(match => {
            // match.$route - the route we matched, which is the matched entry from the arguments to route()
            // match.$args - the args passed in the link
            // match.$link - the full link data
            const intpaht = `/event-details/${match.$args.id}`;
            this.zone.run(() => {
                this.router.navigate([intpaht]);
            });
        }, nomatch => {
            // nomatch.$link - the full link data
            // console.error('Got a deeplink that didn\'t match', nomatch);
        });
    }

    openProfile() {
      this.menu.close('first');
      this.router.navigate(['/account/profile']);
    }
}
