import { Component, OnInit } from '@angular/core';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';
import {ActionSheetController, ToastController, NavParams, Platform, PopoverController} from '@ionic/angular';
import { Clipboard } from '@ionic-native/clipboard/ngx';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.component.html',
  styleUrls: ['./popover.component.scss'],
})
export class PopoverComponent implements OnInit {
  event = {
      id: '',
      city: '',
      date: ''
  };

  constructor(private socialSharing: SocialSharing,
              public actionsheetCtrl: ActionSheetController,
              public toastController: ToastController,
              private navParams: NavParams,
              private clipboard: Clipboard,
              private platform: Platform,
              private popoverController: PopoverController) { }

  ngOnInit() {
    console.log(this.navParams.get('id'));
    this.event.date = this.navParams.get('date');
    this.event.city = this.navParams.get('city');
    this.event.id = this.navParams.get('id');
  }

  shareEvent() {
      const link = 'https://feedapp.inovagit.com/event-details/' + this.event.id;
      const msg = this.constructMessage();
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
          this.popoverController.dismiss();
      } else {
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
          this.popoverController.dismiss();
      }
  }

  constructMessage(): string {
      return 'Hello , \nZeroHunger organized an event At ' + this.event.date + ' in ' + this.event.city +
          '\nJoin As : ';
  }

  async copyLink() {
      const link = 'https://feedapp.inovagit.com/event-details/' + this.event.id;
      if (this.platform.is('desktop') || this.platform.is('mobileweb')) {
          if (navigator.clipboard) {
              try {
                  await navigator.clipboard.writeText(link);
              } catch (err) {}
          }
          this.popoverController.dismiss();
      } else {
          this.clipboard.copy(link);
          this.popoverController.dismiss();
      }
  }
}
