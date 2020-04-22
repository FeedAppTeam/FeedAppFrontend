import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

    search = {}
    logForm() {
        console.log(this.search);

    }

  isDisplayed: boolean = true;

  constructor() { }

  ngOnInit() {}

  public toggle(){
    this.isDisplayed = !this.isDisplayed;
}

   public resetValue(){
      this.search= "";
   }

}
