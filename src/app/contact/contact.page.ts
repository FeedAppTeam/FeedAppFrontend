import { Component, OnInit } from '@angular/core';
import {Platform} from '@ionic/angular';
import {Router} from '@angular/router';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { AppAvailability } from '@ionic-native/app-availability/ngx';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit  {

  contactForm = {
    name: '',
    email: '',
    message: '',
  }
  error = false;
  constructor(public platform: Platform, private router: Router,private appAvailability:AppAvailability,private InAppBrowser:InAppBrowser) {
  }

  ngOnInit() {
  }

  processForm(nameInput,emailInput,messageInput) {
    if(this.contactForm.name =='' || this.contactForm.email =='' || this.contactForm.message =='') {
      this.error =true;
    } else if(!(nameInput.invalid && (nameInput.dirty || nameInput.touched)) && !(emailInput.invalid && (emailInput.dirty || emailInput.touched)) && !(messageInput.invalid && (messageInput.dirty || messageInput.touched))) {
    this.error =false;
   }else {
    this.error =true;
   }
  }

  launchExternalApp(iosSchemaName: string, androidPackageName: string, appUrl: string, httpUrl: string, username: string) {
    let app: string;
    if (this.platform.is('ios')) {
         console.log("plataforma ios");
        app = iosSchemaName;
    } else if (this.platform.is('android')) {
        app = androidPackageName;
        console.log("plataforma android");
    } else {
        this.InAppBrowser.create(httpUrl + username, '_system');
        console.log("no es plataforma");
        return;
    }
  
    this.appAvailability.check(app).then(
      () => { // success callback
            this.InAppBrowser.create(appUrl + username, '_system');            
            console.log("abrir app");
            if(app.includes('youtube') || app.includes('linkedin')) {
                this.InAppBrowser.create(httpUrl + username, '_system');
            }
      },
      (data) => { // error callback
        this.InAppBrowser.create(httpUrl + username, '_system');
        console.log("ERROR");
        console.log(data);
      }
    );
  }
  
  openInstagram(username: string) {
    this.launchExternalApp('instagram://', 'com.instagram.android', 'instagram://user?username=', 'https://www.instagram.com/', username);
  }
  
  openTwitter(username: string) {
    this.launchExternalApp('twitter://', 'com.twitter.android', 'twitter://user?screen_name=', 'https://twitter.com/', username);
  }
  
  openFacebook(username: string) {
    //this.launchExternalApp('fb://', 'com.facebook.orca', 'fb://page/', 'https://www.facebook.com/', username);
    this.launchExternalApp('fb://', 'com.facebook.katana', 'fb://profile/', 'https://www.facebook.com/', username);
  }

  openwhatsapp(number: string) {
      this.launchExternalApp('whatsapp://', 'com.whatsapp', 'whatsapp://send?phone=', 'https://wa.me/', number);
  }
  openLinkedIn(username: string) {
      this.launchExternalApp('linkedin://', 'com.linkedin.android','linkedin://', 'https://www.linkedin.com/', username);  
  }
  openYoutube(username: string) {
      this.launchExternalApp('youtube://', 'com.google.android.youtube','youtube://channel?id=', 'https://www.youtube.com/channel/', username);  
  }

}
