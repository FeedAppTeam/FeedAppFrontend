import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.page.html',

  styleUrls: ['./create-event.page.scss'],
})

export class CreateEventPage implements OnInit {
  //listOfNeeds = [{item:'nouna',number:''}]
  listOfNeeds = [{item:'',number:''}]
  constructor() {
  }

  ngOnInit() {
   // localStorage.setItem('id1','nouna') 
  }
  
  delthis(i){
    console.log(i)
     this.listOfNeeds.splice(i,1)
  }

  onClickMe = () => {
    this.listOfNeeds.push({item:'',number:''})
    //console.log(this.listOfNeeds);
  }

}
