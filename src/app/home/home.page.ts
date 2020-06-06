import {Component, OnInit} from '@angular/core';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  events: any[] =  [];
  constructor() {
    this.events = [
      {
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
            nbr : 5,
            total : 15
          },
          {
            item : 'Bread',
            nbr : 10,
            total : 15
          }
        ] ,
        Participatns :
          {
            P1 : 'Abdelouahid',
            P2 : 'Oumaima',
            P3 : 'Loubna'
          }
      }, {
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
            nbr : 13,
            total : 15
          },
          {
            item : 'Eggs',
            nbr : 10,
            total : 15
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
  }

  ngOnInit() {
  }
}
