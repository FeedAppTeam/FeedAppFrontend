import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chef',
  templateUrl: './chef.page.html',
  styleUrls: ['./chef.page.scss'],
})
export class ChefPage implements OnInit {
  chef:any=[];
  constructor() { 
    this.initializachef();
  
  }
  initializachef()
  {
  
    this.chef = [
     {
         "name": "Ayoub",
         "code" : "0618278119"
     },
     {
         "name": "Omar",
         "code" : "0655678998"
     },
     {
         "name": "Bouchra",
         "code" : "0672819900"
      
     },
     {
         "name": "Mohammed",
         "code" : "0627819010"
     },
    ]
  }
  

  ngOnInit() {
  }

}
