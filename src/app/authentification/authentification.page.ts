import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {

  change: any = true;
  loginForm = {
    username : '',
    password : ''
  };
  error = false;
  // Methods
  constructor(private route: ActivatedRoute, private router: Router) {
       
  }

  ngOnInit() {
    
  }
  Connexion(data) {
    console.log(data);
  }

  toRegister() {
    this.router.navigate(['auth/signUp']);
  }

  Login(usernameInput,passwordInput) {
    if(this.loginForm.username =='' || this.loginForm.password =='') {
      this.error =true;
    } else if(!(usernameInput.invalid && (usernameInput.dirty || usernameInput.touched)) && !(passwordInput.invalid && (passwordInput.dirty || passwordInput.touched))) {
    this.error =false;
   }else {
    this.error =true;
   }
  }

}
