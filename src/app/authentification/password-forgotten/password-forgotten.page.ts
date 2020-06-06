import { Component, OnInit} from '@angular/core';
import {AlertController, ToastController} from '@ionic/angular';
import {Router} from '@angular/router';
@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.page.html',
  styleUrls: ['./password-forgotten.page.scss'],
})
export class PasswordForgottenPage implements OnInit {
    user: string;
    OTP = [];
    showOTPInput = 0;
    OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
    forgotPassword = {
        phone: ''
    };
    changePasswordForm = {
        password: '',
        rePassword: ''
    };
    error = false;
    errorChangePassword = false;
    constructor(private toastCtrl: ToastController,
                private router: Router,
                public alertController: AlertController) {
    }

    ngOnInit() {
    }

    toChangePassword() {
        if ( this.checkOTP() === true ) {
           // this.presentToast('You are successfully changed password' , 'top', 1500);
            this.showOTPInput = 2;
        } else {
            this.presentToast('Your OTP is not valid' , 'bottom', 1500);
        }
    }

    async changePassword(passwordInput, repasswordInput) {
        if (this.changePasswordForm.password === '' || this.changePasswordForm.rePassword === ''
            || this.changePasswordForm.rePassword !== this.changePasswordForm.password ) {
            this.errorChangePassword = true;
        } else if ( !(passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)) &&
            !(repasswordInput.invalid && (repasswordInput.dirty || repasswordInput.touched))) {
            this.errorChangePassword = false;
            // this.presentToast('You are successfully changed password' , 'top', 1500);
            const alert = await this.alertController.create({
                header: 'Info',
                message: 'Your password is changed. Please login!',
                backdropDismiss: false,
                buttons: [
                    {
                        text: 'Login',
                        handler: () => {
                            this.toSignIn();
                        }
                    }
                ]
            });
            await alert.present();
        } else {
            this.errorChangePassword = true;
        }
    }
    toSignIn() {
        this.router.navigate(['home']);
        this.router.navigate(['auth/signIn']);
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

    next(phoneInput) {
            if (this.forgotPassword.phone === '') {
                this.error = true;
            } else if (!(phoneInput.invalid && (phoneInput.dirty || phoneInput.touched))) {
                this.error = false;
                this.showOTPInput = 1;
                this.sendSms();
            } else {
                this.error = true;
            }
    }

    sendSms() {

    }

    checkOTP() {
      return true;
    }

    async presentToast(messageVal, positionVal, durationVal) {
        const toast = await this.toastCtrl.create({
            message: messageVal,
            duration: durationVal,
            position: positionVal
        });
        toast.present();
    }

}
