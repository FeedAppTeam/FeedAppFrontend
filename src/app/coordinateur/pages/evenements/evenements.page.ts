import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-evenements',
  templateUrl: './evenements.page.html',
  styleUrls: ['./evenements.page.scss'],
})
export class EvenementsPage implements OnInit {
benevol : any[];
  constructor() { }

  ngOnInit() {
  }

  
  initializbenevol()
  {
  
    this.benevol = [
     {
         "name": "Abdlouahid",
         "code" : "0618278119"
     },
     {
         "name": "Abdelkadr",
         "code" : "0655678998"
     },
     {
         "name": "somia",
         "code" : "0672819900"
      
     },
     {
         "name": "oumaima",
         "code" : "0627819010"
     },
    ]
  }

  Filterbenevole(ev:any)
  {
    this.initializbenevol();
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.benevol = this.benevol.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })

    }
  }

  

}
