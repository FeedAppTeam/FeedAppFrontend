import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Router} from '@angular/router';
import {AlertController} from '@ionic/angular';
import {TokenStorageService} from '../../../services/token-storage.service';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class ChangePasswordComponent implements OnInit {
    @Input() profile: any;
    @Output() goBack = new EventEmitter<string>();
    content = '';
    showOTPInput = false;
    OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
    OTP = [];

    constructor(private router: Router,
                public alertController: AlertController,
                private token: TokenStorageService) {}

    ngOnInit() {}

    contentChange() {
        this.content = 'main';
        this.goBack.emit(this.content);
    }

    otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        } else if (next && event.target.value.length > 0) {
            next.setFocus();
        }  else {
            // return 0;
            event.target.blur();
        }
        /*else if ( next === '') {
          event.target.blur();
        } */
    }

    next() {
        this.showOTPInput = true;
    }

    async toSignIn() {
        const alert = await this.alertController.create({
            header: 'Info',
            message: 'Your password is changed. Please login Again!',
            backdropDismiss: false,
            buttons: [
                {
                    text: 'Ok',
                    handler: () => {
                        this.token.signOut();
                    }
                }
            ]
        });
        await alert.present();
    }
}
