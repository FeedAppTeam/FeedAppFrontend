import { Component, OnInit } from '@angular/core';
import {AlertController, MenuController} from '@ionic/angular';
import {TokenStorageService} from '../services/token-storage.service';



@Component({
  selector: 'app-coordinateur',
  templateUrl: './coordinateur.page.html',
  styleUrls: ['./coordinateur.page.scss'],
})

export class CoordinateurPage implements OnInit {
event: any;
chef:any=[];
benevol:any=[];
evenement:any=[];
segment = 'chef';
private i :boolean = false;
private button : boolean[] = [];


  constructor(
    public alertController: AlertController,
    public token: TokenStorageService,
    private menu: MenuController,
    ) { 
    this.initializachef();
    this.initializbenevol();
    this.initializaevenements();
  }

  async addtochef(post) {
    if(!this.button[post]){
    const alert = await this.alertController.create({
        header: 'Set As Leader',
        message: 'You really want to Set : "'+this.benevol[post]["name"]+'" as a leader ?',
        backdropDismiss: false,
        buttons: [
            {
                text: 'No',
                handler: () => {
                  this.button[post]=false;                  
                }
                
            },
            {
                text: 'Yes',
                handler: () => {
                  this.chef.push(this.benevol[post]);
                  
                }
            }
        ]
    });
    this.menu.close('first');
    alert.present();
  }else if(this.button[post]){
    const alert = await this.alertController.create({
      header: 'Set As Participant',
      message: 'You really want to Set : "'+this.benevol[post]["name"]+'" as a participant ?',
      backdropDismiss: false,
      buttons: [
          {
            text: 'No',
            handler: () => {
              this.button[post]=true;                  
            }
          },
          {
              text: 'Yes',
              handler: () => {
                for(var i =0;i<this.chef.length;i++){
                  if(this.chef[i] == this.benevol[post])
                  {
                    this.chef.splice(i,1);
                  }
                }
              }
          }
      ]
  });
  this.menu.close('first');
  alert.present();

  }
}


  async DeleteBenevol(i) {
    const alert = await this.alertController.create({
        header: 'Delete',
        message: 'You really want to Delete : "'+this.benevol[i]["name"]+'"',
        backdropDismiss: false,
        buttons: [
            {
                text: 'No'
            },
            {
                text: 'Yes',
                handler: () => {
                  this.benevol.splice(i, 1);  
                }
            }
        ]
    });
    this.menu.close('first');
    alert.present();
    
}

  Filterevenement(ev:any)
  {
    this.initializaevenements();
    const val = ev.target.value;
    console.log("AnA kanafichi "+val);
    if(val && val.trim() != ''){
      this.evenement = this.evenement.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })

    }
  }

  Filterchef(ev:any)
  {
    this.initializachef();
    const val = ev.target.value;
    if(val && val.trim() != ''){
      this.chef = this.chef.filter((item)=>{
        return (item.name.toLowerCase().indexOf(val.toLowerCase())>-1);
      })

    }
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

selectVal(val)
{
  alert("you have selected ="+val )
}

  ngOnInit() {
  
    
  }

initializachef()
{

  this.chef = [
   {
       "name": "Ayoub Batman",
       "code" : "0618278119",
       "image": "avatar15.png"
   },
   {
       "name": "Omar Superman",
       "code" : "0655678998",
       "image": "avatar7.png"

   },
   {
       "name": "Bouchra Superwomen",
       "code" : "0672819900",
       "image": "avatar5.png"
    
   },
   {
       "name": "Mohammed Thor",
       "code" : "0627819010",
       "image": "avatar6.png"

   },
  ]
}

initializaevenements()
{

  this.evenement = [
   {
       "name": "Meating in Agadir",
       "city":"Agadir",
       "leader":"Abdlouahid",
       "date":"18/06/2020"
      
   },
   {
       "name": "Give and recieve back",
       "city":"Agadir",
       "leader":"Abdlkadr",
       "date":"20/06/2020"

       

   }
  
  ]
}

initializbenevol()
{

  this.benevol = [
   {
       "name": "Abdlouahid Hulk",
       "code" : "0618278119",
       "image": "avatar4.png"
   },
   {
       "name": "Abdelkadr Ironman",
       "code" : "0655678998",
       "image": "avatar2.png"
   },
   {
       "name": "somia BlackWidow",
       "code" : "0672819900",
       "image": "avatar3.png"
    
   },
   {
       "name": "oumaima CaptainMarvel",
       "code" : "0627819010",
       "image": "avatar10.png" 
   },
  ]
}

}
