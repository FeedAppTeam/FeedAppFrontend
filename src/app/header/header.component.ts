import {Component, OnDestroy, OnInit} from '@angular/core';
import {AlertController, MenuController, Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';
import {Observable, Subscription} from 'rxjs';
import {JwtResponse} from '../models/jwt-response';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

    isDisplayed = true;
    srcFile = 'assets/icon/feedApp.png';
    srcAvatar = 'assets/avatar/avatar7.png';
    url = '/home';
    widthSize = this.platform.width();
    searchForm = {
        activity : '',
        date : ''
    };

    userSubscription: Subscription;
    infoUser: JwtResponse = null;
    constructor(public platform: Platform, private router: Router,
                public alertController: AlertController,
                public token: TokenStorageService,
                private menu: MenuController) {
        this.init();
     }

     async init() {
         this.userSubscription = await this.token.getObservableUser().subscribe((data) => {
             this.infoUser = data;
             if ((typeof this.infoUser) === 'string' )
                 this.infoUser = JSON.parse(data);
             this.srcAvatar = (this.infoUser !== null && this.infoUser.img !== undefined) ? this.infoUser.img : this.srcAvatar;
         });
     }
    logForm() {
        console.log(this.searchForm);
    }

    ngOnInit() {
        this.resetVariable();
        this.init();
    }

    ngOnDestroy() {
         this.userSubscription.unsubscribe();
    }

    ionViewWillLeave() {
         this.userSubscription.unsubscribe();
    }

    toggle() {
        this.isDisplayed = !this.isDisplayed;
    }

    setTime() {
        this.searchForm.date = this.searchForm.date.split('T')[0];
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
                    }
                }
            ]
        });
        alert.present();
    }
    toAuth(segmentValue) {
        this.router.navigate(['auth/' + segmentValue]);
        this.resetVariable();
    }

    toHome() {
        this.router.navigate(['home']);
        this.resetVariable();
    }

    toCreate() {
        this.router.navigate(['create-event']);
        this.resetVariable();
    }

    openAbout() {
        this.router.navigate(['about']);
        this.resetVariable();
    }

    openContact() {
        this.router.navigate(['contact']);
        this.resetVariable();
    }
    openAccount() {
        this.router.navigate(['account/profile']);
        this.resetVariable();
    }

    toCoordinateur() {
        this.router.navigate(['coordinateur']);
        this.resetVariable();
    }
    resetVariable() {
        this.widthSize = this.platform.width();
        this.isDisplayed = true;
    }
    changeTheme() {
        // State changes
        const content = document.querySelector('#page-wrap');
        const header = document.querySelector('ion-header');
        const events = document.querySelectorAll('app-event ion-button');
        const eventsCreate = document.querySelectorAll('app-create-event ion-button');
        content.classList.toggle('dialogIsOpen');
        header.classList.toggle('dialogIsOpen');
        for (let i = 0; i < events.length; i++) {
            events[i].classList.toggle('pointerEvent');
        }
        for (let i = 0; i < eventsCreate.length; i++) {
            eventsCreate[i].classList.toggle('pointerEvent');
        }
    }

    openMenu() {
        this.menu.enable(true, 'first');
        this.menu.open('first');
    }
}
