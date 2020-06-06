import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: 'event-details.page.html',
  styleUrls: ['event-details.page.scss'],
})
export class EventDetailsPage {
  event: any;
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
  constructor(private route: ActivatedRoute, private router: Router) {
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
}

