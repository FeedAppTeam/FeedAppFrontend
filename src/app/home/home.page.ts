import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events: any[] =  [];
  subscription: any;
  img = '/assets/Images/casablanca.jpg';
  constructor() {
    this.events = [
      {
        id: 1,
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
         id: 2,
        informations : {
          title : 'Meal action in Agadir',
          city : 'Agadir',
          organizedby : 'Hajar',
          cordonedby : 'Nouhaila',
          date : '18/04/2020',
          hour: '18h00',
          img : 'Agadir.jpg'
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

  doRefresh(event) {
      console.log('Begin async operation');
      setTimeout(() => {
          console.log('Async operation has ended');
          event.target.complete();
          this.events = [
              {
                  id: 1,
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
                  id: 2,
                  informations : {
                      title : 'Meal action in Agadir',
                      city : 'Agadir',
                      organizedby : 'Hajar',
                      cordonedby : 'Nouhaila',
                      date : '18/04/2020',
                      hour: '18h00',
                      img : 'Agadir.jpg'
                  },
                  needed : [
                      {
                          item : 'milk',
                          nbr : 5,
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
              },
              {
                  id: 3,
                  informations : {
                      title : 'Meal action in casablanca',
                      city : 'Rabat',
                      organizedby : 'Zineb',
                      cordonedby : 'Abdelouahid',
                      date : '18/04/2020',
                      hour: '08h00',
                      img : 'rabat.png'
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
              },
              {
                  id: 4,
                  informations : {
                      title : 'Meal action in Agadir',
                      city : 'Agadir',
                      organizedby : 'Hajar',
                      cordonedby : 'Nouhaila',
                      date : '18/04/2020',
                      hour: '18h00',
                      img : 'Agadir.jpg'
                  },
                  needed : [
                      {
                          item : 'milk',
                          nbr : 5,
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
      }, 2000);
  }
  portChange(event) {
        console.log('port:', event.value);
  }
}
