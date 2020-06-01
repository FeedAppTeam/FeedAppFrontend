import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  registerForm = {
    name : '',
    phone : '',
    email : '',
    password : '',
    rePassword : '',
    gender : '',
    city : '',
  };
  cities = [
    {name: 'Rabat', abbrev: 'rabat'},
    {name: 'Casablanca', abbrev: 'casa'},
    {name: 'Mohammadia', abbrev: 'mohammadia'},
    {name: 'Agadir', abbrev: 'agadir'},
    {name: 'Oujda', abbrev: 'oujda'},
    {name: 'Laayoune', abbrev: 'laayoune'},
    {name: 'El Houcima', abbrev: 'elhoucima'},
    {name: 'Fes', abbrev: 'fes'},
    {name: 'Meknes', abbrev: 'meknes'},
    {name: 'Kenitra', abbrev: 'kenitra'},
    {name: 'Laaraich', abbrev: 'laaraich'},
    {name: 'Marrakech', abbrev: 'kech'},
    {name: 'Tanger', abbrev: 'tanger'},
    {name: 'Tetouane', abbrev: 'tetouane'},
    {name: 'Tiznit', abbrev: 'tiznit'},
    {name: 'Tifelt', abbrev: 'tifelt'},
    {name: 'Safi', abbrev: 'safi'},
    {name: 'El Jadida', abbrev: 'el jadida'},
    {name: 'Missour', abbrev: 'missour'},
   ];
   genders = [
     {name: 'Male', abbrev: 'male'},
     {name: 'Female', abbrev: 'female'},
     {name: 'Other', abbrev: 'other'}];
   error = false;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    const ionSelects = document.querySelectorAll('ion-select');
    ionSelects.forEach((sel) => {
      sel.shadowRoot.querySelectorAll('.select-icon-inner')
        .forEach((elem) => {
          elem.setAttribute('style', 'display: none;');
        });
    });
  }

  toSignIn() {
    this.router.navigate(['auth/signIn']);
  }

  clearSelection() {
    this.registerForm.city = null;
  }

  register(nameInput,phoneInput,passwordInput,repasswordInput,emailInput,genderInput,cityInput) {
    if(this.registerForm.name =='' ||this.registerForm.phone =='' ||this.registerForm.email =='' ||this.registerForm.password =='' ||this.registerForm.rePassword =='' || this.registerForm.gender =='' || this.registerForm.city =='' || this.registerForm.rePassword !== this.registerForm.password) {
      this.error =true;
    } else if(!(nameInput.invalid && (nameInput.dirty || nameInput.touched)) && 
              !(phoneInput.invalid && (phoneInput.dirty || phoneInput.touched)) &&
              !(passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)) &&
              !(repasswordInput.invalid && (repasswordInput.dirty || repasswordInput.touched)) &&
              !(emailInput.invalid && (emailInput.dirty || emailInput.touched)) &&
              !(genderInput.invalid && (genderInput.dirty || genderInput.touched)) &&
              !(cityInput.invalid && (cityInput.dirty || cityInput.touched))
              ) {
      this.error =false;
    }else {
      this.error =true;
    }
  }
}
