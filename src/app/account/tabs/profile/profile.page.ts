import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {JwtResponse} from '../../../models/jwt-response';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  infoUser: JwtResponse = null;
  contentToShow = 'main';
  constructor(public token: TokenStorageService) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
      console.log('from ionViewDidEnter');
      this.getCurrentUser();
  }
  async getCurrentUser() {
    this.infoUser = this.token.getCurrentUser();
    if ((typeof this.infoUser) === 'string' ) {
      this.infoUser = JSON.parse(this.infoUser.toString());
    }
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
    (content !== undefined && content !== null) ? this.contentToShow = content : this.contentToShow = 'main';
  }

}
