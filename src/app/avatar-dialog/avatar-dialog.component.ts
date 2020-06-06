import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';

@Component({
  selector: 'app-avatar-dialog',
  templateUrl: './avatar-dialog.component.html',
  styleUrls: ['./avatar-dialog.component.scss'],
})
export class AvatarDialogComponent implements OnInit {

    avatars: Array<string> = new Array<string>();
    link = null;
    constructor(
        public modalController: ModalController
    ) { }

    ngOnInit() {
        this.getAvatar();
    }

    getAvatar() {
        for ( let i = 1 ; i < 22 ; i++) {
          this.avatars.push('/assets/avatar/avatar' + i + '.png');
        }
    }

    dismiss(avatarImg) {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.modalController.dismiss({
            avatar: avatarImg
        });
    }
}
