import {
  Component,
  OnInit
} from '@angular/core';
@Component({
  selector: 'app-password-forgotten',
  templateUrl: './password-forgotten.page.html',
  styleUrls: ['./password-forgotten.page.scss'],
})
export class PasswordForgottenPage implements OnInit {
  user: string;

  forgotPassword = {
    email: ''
  };
  error = false;

  constructor() {}

  ngOnInit() {}

  //to show user data in the console
  forgot() {
    console.log('forgot password:' + this.user)
  }

  submit(emailInput: {
    invalid: any;dirty: any;touched: any;
  }) {
    if (this.forgotPassword.email == '') {
      this.error = true;
    } else if (!(emailInput.invalid && (emailInput.dirty || emailInput.touched))) {
      this.error = false;
    } else {
      this.error = true;
    }
  }
}