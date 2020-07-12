import { Component, OnInit , Input} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';
import { SocialSharing } from '@ionic-native/social-sharing/ngx';
import {ActionSheetController, NavParams, Platform, ToastController} from '@ionic/angular';
import { PopoverController } from '@ionic/angular';
import {PopoverComponent} from '../popover/popover.component';
import {Clipboard} from "@ionic-native/clipboard/ngx";

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() events: any;
  contentLoaded = false ;
  constructor(private router: Router,
              private socialSharing: SocialSharing,
              public actionsheetCtrl: ActionSheetController,
              public toastController: ToastController,
              private clipboard: Clipboard,
              private platform: Platform) {
        setTimeout(() => {
            this.contentLoaded = true ;
        }, 3000);
   }

    ngOnInit() {}

    getMoreDetailsEvent(details) {

        const detailsEvent: NavigationExtras = {
            state: {
                event: details
            }
        };
        this.router.navigate(['event-details/' + details.id ], detailsEvent);
    }

   shareEventGlobal(event) {
       const link = 'https://feedapp.inovagit.com/event-details/' + event.id;
       const msg = this.constructMessage(event);
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
       const options = {
            message: msg, // not supported on some apps (Facebook, Instagram)
            subject: 'ZeroHunger - FeedApp', // fi. for email
            url : link,
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
        const link = 'https://feedapp.inovagit.com/event-details/' + event.id;
        const msg = this.constructMessage(event) + link;
        // this is the complete list of currently supported params you can pass to the plugin (all optional)
        if (this.platform.is('mobileweb')) {
            let newVariable: any;
            newVariable = window.navigator;
            if (newVariable && newVariable.share) {
                newVariable.share({
                    title: 'ZeroHunger - FeedApp',
                    text: msg,
                    url: link,
                })
                    .then(() => console.log('Successful share'))
                    .catch((error) => console.log('Error sharing', error));
            } else {
                alert('share not supported');
            }
        } else {
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
    }
    async presentPopover(ev: any , event) {
        /*const popover = await this.popoverController.create({
            component: PopoverComponent,
            componentProps: {
                id : event.id,
                date : event.informations.date,
                city : event.informations.city
            },
            cssClass: 'popover-class',
            event: ev,
            translucent: true
        });
        return await popover.present();*/
        const actionSheet = await this.actionsheetCtrl.create({
            header: 'Share event',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Share',
                    role: 'destructive',
                    icon: this.platform.is('ios') ? 'ios-share-social-outline' : 'share-social-outline',
                    handler: () => {
                        this.share(event);
                    }
                },
                {
                    text: 'Copy link',
                    role: 'destructive',
                    icon: this.platform.is('ios') ? 'ios-link-outline' : 'link-outline',
                    handler: () => {
                        this.copyLink(event);
                    }
                }
            ]
        });
        await actionSheet.present();
    }
    async copyLink(event) {
        const link = 'https://feedapp.inovagit.com/event-details/' + event.id;
        if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
            if (navigator.clipboard) {
                try {
                    await navigator.clipboard.writeText(link);
                } catch (err) {}
            }
        } else {
            this.clipboard.copy(link);
        }
    }
}
