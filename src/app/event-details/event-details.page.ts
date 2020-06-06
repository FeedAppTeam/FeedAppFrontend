import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Platform, ToastController} from '@ionic/angular';
import {SocialSharing} from '@ionic-native/social-sharing/ngx';

@Component({
  selector: 'app-event-details',
  templateUrl: 'event-details.page.html',
  styleUrls: ['event-details.page.scss'],
})
export class EventDetailsPage {
  event: any;
  segment = 'details';
  events = [
      {
          id : 1,
          informations : {
              title : 'Meal action in casablanca',
              city : 'Casablanca',
              organizedby : 'Zineb',
              cordonedby : 'Abdelouahid',
              date : '18/04/2020',
              hour: '08h00',
              img : 'casablanca.jpg'
          },
          needed : [
              {
                  item : 'Milk',
                  nbr : '5',
                  total : '15'
              },
              {
                  item : 'Bread',
                  nbr : '10',
                  total : '15'
              }
          ] ,
          Participatns :
              {
                  P1 : 'Abdelouahid',
                  P2 : 'Oumaima',
                  P3 : 'Loubna'
              }
      }, {
          id : 2,
          informations : {
              title : 'Meal action in Agadir',
              city : 'Agadir',
              organizedby : 'Hajar',
              cordonedby : 'Nouhaila',
              date : '18/04/2020',
              hour: '18h00',
              img : 'rabat.jpg'
          },
          needed : [
              {
                  item : 'milk',
                  nbr : '5',
                  total : '15'
              },
              {
                  item : 'Eggs',
                  nbr : '10',
                  total : '15'
              }
          ] ,
          Participatns :
              {
                  P1 : 'Abdelouahid',
                  P2 : 'Oumaima',
                  P3 : 'Loubna'
              }
      }
  ];
  constructor(private route: ActivatedRoute, private router: Router,
              private platform: Platform,
              public toastController: ToastController,
              private socialSharing: SocialSharing) {
    console.log('event details');
    this.route.queryParams.subscribe(params => {
        console.log('subscribe');
        if (this.router.getCurrentNavigation().extras.state) {
            if (this.router.getCurrentNavigation().extras.state.event !== undefined &&
                this.router.getCurrentNavigation().extras.state.event !== null) {
                console.log('if');
                this.event = this.router.getCurrentNavigation().extras.state.event;
            }
        } else {
            console.log('else');
            const id = this.route.snapshot.paramMap.get('id');
            if ( 0 <= Number(id) - 1 && Number(id) - 1 < this.events.length ) {
                this.event = this.events[Number(id ) - 1];
            }
        }
    });
  }

  goHome() {
      this.router.navigate(['home']);
  }

  async segmentChanged(ev: any) {
        // await this.slider.slideTo(this.segment);
        console.log('Segment changed', ev);
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
        }
    }

  constructMessage(): string {
        return 'Hello , \nZeroHunger organized an event At ' + this.event.date + ' in ' + this.event.city +
            '\nJoin As : ';
    }

}

