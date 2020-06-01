import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    isDisplayed = true;
    srcFile = 'assets/icon/feedApp.png';
    url = '/home';
    widthSize = this.platform.width();
    searchForm = {
        activity : '',
        date : ''
    };

    constructor(public platform: Platform, private router: Router) {
     }

    logForm() {
        console.log(this.searchForm);
    }

    ngOnInit() {
        this.resetVariable();
    }
   
    toggle() {
        this.isDisplayed = !this.isDisplayed;
    }

    setTime() {
        this.searchForm.date = this.searchForm.date.split('T')[0];
    }

    toAuth(segmentValue) {     
        this.router.navigate(['auth/'+segmentValue]);
        this.resetVariable();
    }

    toHome() {
        this.router.navigate(['home']);
        this.resetVariable();
    }

    toCreate() {
        this.router.navigate(['create-event']);
        this.resetVariable();
    }

    toAbout() {
        this.router.navigate(['about']);
        this.resetVariable();
    }

    openContact() {
        this.router.navigate(['contact']);
        this.resetVariable();
    }

    resetVariable() {
        this.widthSize = this.platform.width();
        this.isDisplayed = true;
    }
    changeTheme() {
        // State changes
        var content = document.querySelector("#page-wrap");
        var header = document.querySelector("ion-header");
        var events = document.querySelectorAll("app-event ion-button");
        var eventsCreate = document.querySelectorAll("app-create-event ion-button");
        content.classList.toggle("dialogIsOpen");  
        header.classList.toggle("dialogIsOpen");  
        for (var i=0; i<events.length; i++){
            events[i].classList.toggle("pointerEvent");
        } 
        for (var i=0; i<eventsCreate.length; i++){
            eventsCreate[i].classList.toggle("pointerEvent");
        }

          
    }   
}
