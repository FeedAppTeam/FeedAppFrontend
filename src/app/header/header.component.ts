import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    isDisplayed = true;
    srcFile = 'assets/icon/feedApp.png';
    widthSize = this.platform.width();
    searchForm = {
        activity : '',
        date : ''
    };

    constructor(public platform: Platform) { }

    logForm() {
        console.log(this.searchForm);
    }

    ngOnInit() {
        this.widthSize = this.platform.width();
    }

    toggle() {
        this.isDisplayed = !this.isDisplayed;
    }

    resetValue() {
        this.searchForm = {
          activity : '',
          date : ''
        };
    }

    setTime() {
        this.searchForm.date = this.searchForm.date.split('T')[0];
    }

}
