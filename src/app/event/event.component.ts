import { Component, OnInit, Input } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import { ActionSheetController, ToastController, ModalController } from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import { PopoverComponent } from '../popover/popover.component';
import { MyModalPage } from '../modals/my-modal/my-modal.page';

export class CalendarComponentModule {}
@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.scss'],
})

export class EventComponent implements OnInit {
    @Input() events: any;
    contentLoaded = false;
    constructor(private router: Router,
        private socialSharing: SocialSharing,
        public actionsheetCtrl: ActionSheetController,
        public toastController: ToastController,
        private popoverController: PopoverController,
        private modalController: ModalController
    ) {
        setTimeout(() => {
            this.contentLoaded = true;
        }, 3000);
    }

    ngOnInit() {}

    getMoreDetailsEvent(details) {

        const detailsEvent: NavigationExtras = {
            state: {
                event: details
            }
        };
        this.router.navigate(['event-details/' + details.id], detailsEvent);
    }

    shareEventGlobal(event) {
        const link = 'https://feedapp.inovagit.com/event-details/' + event.id;
        const msg = this.constructMessage(event);
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        const options = {
            message: msg, // not supported on some apps (Facebook, Instagram)
            subject: 'ZeroHunger - FeedApp', // fi. for email
            url: link,
            iPadCoordinates: '0,0,0,0' // IOS only iPadCoordinates for where the popover should be point.  Format with x,y,width,height
        };
        this.socialSharing.shareWithOptions(options).then(
            () => {

            },
            async () => {
                const toast = await this.toastController.create({
                    message: 'Error sharing',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
            }
        );
    }

    constructMessage(event): string {
        return 'Hello , \nZeroHunger organized an event At ' + event.informations.date + ' in ' + event.informations.city +
            '\nJoin As : ';
    }

    share(event) {
        const link = 'https://feedapp-638f1.firebaseapp.com/event-details/' + event.id;
        const msg = this.constructMessage(event) + link;
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        this.socialSharing.share(msg, 'ZeroHunger - FeedApp', null, null).then(
            () => {

            },
            async () => {
                const toast = await this.toastController.create({
                    message: 'Error sharing',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
            }
        );
    }

    async presentPopover(ev: any, event) {
        console.log('click');
        const popover = await this.popoverController.create({
            component: PopoverComponent,
            componentProps: {
                id: event.id,
                date: event.informations.date,
                city: event.informations.city
            },
            cssClass: 'popover-class',
            event: ev,
            translucent: true
        });
        return await popover.present();
    }
    
    //to show modal
    async showModal() {
        const modal = await this.modalController.create({
            component: MyModalPage,
        });
        modal.present();
    }
}