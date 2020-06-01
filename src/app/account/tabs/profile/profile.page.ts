import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  profileUser: any = {};
  imgURL = '../../assets/Images/avatar.png';
  contentToShow = 'main';
  constructor(private router: Router, private platform: Platform) {
    this.profileUser  = {
        informations: {
          name: 'Oumaima Amkane',
          city: 'Agadir',
          phone: '0641315913',
          email: 'ouma@gmail.com',
          password: 'oumaima',
          gender: 'Female',
          badge1: 'gold',
          badge2: 'silver',
        }
      };
  }
  showProfile() {
    this.contentToShow = 'edit';
  }
  showPassword() {
      this.contentToShow = 'password';

  }
  showTeam() {
      this.contentToShow = 'team';
  }
  setContent(content) {
    console.log(content);
      (content !== undefined && content !== null) ? this.contentToShow = content : this.contentToShow = 'main';
  }
  ngOnInit() {}
}
