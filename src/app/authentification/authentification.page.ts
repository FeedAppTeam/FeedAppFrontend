import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../services/auth.service';
import {TokenStorageService} from '../services/token-storage.service';
import {AuthLoginInfo} from '../models/login-info';
import {ToastController} from '@ionic/angular';


@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  private loginInfo: AuthLoginInfo;
  change: any = true;
  loginForm = {
    phone : '',
    password : ''
  };
  error = false;

  showSplashLogin = false;
  // Methods
  constructor(private route: ActivatedRoute, private router: Router,
              private authService: AuthService, private tokenStorage: TokenStorageService,
              public toastController: ToastController
  ) {

  }

  ngOnInit() {

  }

  toRegister() {
    this.router.navigate(['auth/signUp']);
  }

  Login(usernameInput, passwordInput) {
    if (this.loginForm.phone === '' || this.loginForm.password === '') {
      this.error = true;
    } else if (!(usernameInput.invalid && (usernameInput.dirty || usernameInput.touched))
                && !(passwordInput.invalid && (passwordInput.dirty || passwordInput.touched))) {
        this.error = false;
        this.showSplashLogin = true;
        this.changeTheme();
        this.loginInfo = new AuthLoginInfo(
            this.loginForm.phone,
            this.loginForm.password);
        this.showSplashLogin = true;
        this.authService.attemptAuth(this.loginInfo).subscribe(
            async (data) => {
                this.showSplashLogin = false;
                this.tokenStorage.saveUser(data);
                this.isLoginFailed = false;
                this.isLoggedIn = true;
                const toast = await this.toastController.create({
                    message: 'You are connected.',
                    duration: 2000,
                    position: 'bottom'
                });
                toast.present();
                this.router.navigate(['home']);
            },
            error => {
                this.showSplashLogin = false;
                this.changeTheme();
                this.errorMessage = 'Incorrect phone or password';
                this.isLoginFailed = true;
            }
        );
   } else {
    this.error = true;
   }
  }

    changeTheme() {
        // State changes
        const content = document.querySelector('app-authentification ion-content');
        const header = document.querySelector('app-authentification ion-header');
        const buttons = document.querySelectorAll('app-authentification ion-button');
        content.classList.toggle('dialogIsOpen');
        header.classList.toggle('dialogIsOpen');


        for (let i = 0; i < buttons.length; i++) {
            buttons[i].classList.toggle('pointerEvent');
        }
    }
}
