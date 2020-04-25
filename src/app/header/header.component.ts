import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    isDisplayed = true;
    srcFile = 'assets/icon/feedApp.png';

    searchForm = {
        activity : '',
        date : ''
    };

    constructor() { }

    logForm() {
        console.log(this.searchForm);
    }

    ngOnInit() {}

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
