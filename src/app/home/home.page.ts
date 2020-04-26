import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events : any[] =  [];

  constructor(private router: Router) {
    this.events = [
      {
        "informations" : {
          "title" :"Meal action in casablanca",
          "city" :"Casablanca",
          "organizedby" : "Zineb",
          "cordonedby" :"Abdelouahid",
          "date" :"18/04/2020",
          "hour":"08h00"
        },
        "needed" : [
          {
            "item" :"Milk",
            "nbr" :"5",
            "total" : "15"
          },
          {
            "item" :"Bread",
            "nbr" :"10",
            "total" : "15"
          }
        ] ,
        "Participatns" :
          {
            "P1" :"Abdelouahid",
            "P2" :"Oumaima",
            "P3" : "Loubna"
          }
      }, {
        "informations" : {
          "title" :"Meal action in Agadir",
          "city" :"Agadir",
          "organizedby" : "Hajar",
          "cordonedby" :"Nouhaila",
          "date" :"18/04/2020",
          "hour":"18h00"
        },
        "needed" : [
          {
            "item" :"milk",
            "nbr" :"5",
            "total" : "15"
          },
          {
            "item" :"Eggs",
            "nbr" :"10",
            "total" : "15"
          }
        ] ,
        "Participatns" :
          {
            "P1" :"Abdelouahid",
            "P2" :"Oumaima",
            "P3" : "Loubna"
          }
      }
    ]
  }

  getMoreDetailsEvent(details) {

    let detailsEvent : NavigationExtras = {
      state: {
          event: details
      }
    };
    this.router.navigate(['event-details'],detailsEvent);
  }
}
