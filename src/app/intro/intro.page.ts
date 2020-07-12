import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import {IonSlides} from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { HomePage } from '../home/home.page';


@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  @ViewChild('slides', { read: true, static: true }) slides: IonSlides;


  constructor(public navCtrl: NavController) { }

  ngOnInit() {
  }
  public next(slides) {
    slides.slideNext();
  }
 

  

}
