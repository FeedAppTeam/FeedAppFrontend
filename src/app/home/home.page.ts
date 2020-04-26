import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  events:any;
  constructor() {
    this.events = [{"title" :"Meal action in Rabat","city" : "Casablanca","by":"Zero Hunger Casablanca","date" :"28 March 2020",
    "img":"Hassan2.jpg" },  
    {"title" :"Meal action in Agadir","city" : "Agadir","by" : 
    "Zero Hunger Casablanca","date" :"28 March 2020",
    "img":"HassanTour.jpg"}]
  }

}
