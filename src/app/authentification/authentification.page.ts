import { Component, OnInit } from "@angular/core";
import { HostBinding } from "@angular/core";
import { FormGroup, FormBuilder, FormControl, Validators,} from "@angular/forms";

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  //Attribute
  @HostBinding("style.height") height1: string;
  @HostBinding("style.height") height2: string;
  segment: string;
  change: string;
  content: string;
  loginform: FormGroup;
  registerform: FormGroup;

  cities = [
   {name:'Rabat',abbrev:"rabat"},
   {name:'Casablanca', abbrev:"casa"},
   {name:'Mohammadia', abbrev:"mohammadia"},
   {name:'Agadir', abbrev:"agadir"},
   {name:'Oujda', abbrev:"oujda"},
   {name:'Laayoune', abbrev:"laayoune"}, 
   {name:'El Houcima', abbrev:"elhoucima"},
   {name:'Fes', abbrev:"fes"}, 
   {name:'Meknes', abbrev:"meknes"}, 
   {name:'Kenitra', abbrev:"kenitra"}, 
   {name:'Laaraich', abbrev:"laaraich"}, 
   {name:'Marrakech', abbrev:"kech"}, 
   {name:'Tanger', abbrev:"tanger"},
   {name:'Tetouane', abbrev:"tetouane"},
   {name:'Tiznit', abbrev:"tiznit"},
   {name:'Tifelt', abbrev:"tifelt"},
   {name:'Safi', abbrev:"safi"},
   {name:'El Jadida', abbrev:"el jadida"},
   {name:'Missour', abbrev:"missour"},
  ];
  genders = [
    {name:'Male',abbrev:'male'},
    {name:'Female', abbrev:"female"},
    {name:'Other', abbrev:"other"}];

  //Methods
  constructor(private login: FormBuilder, private register: FormBuilder) { 
     //loginForm
     let FormControls1 = {
      loginPhone: new FormControl("", [
        Validators.pattern("^((\\+212-?)|0)?[0-9]{10}$"),
        Validators.required,
        Validators.min(10),
        Validators.max(10)
      ]),
      loginPassword: new FormControl("", [
        Validators.required
      ]),
    };
    //registerForm
    let FormControls2 = {
      registerName: new FormControl("", [
        Validators.required
      ]),
      registerPhone: new FormControl("", [
        Validators.required,
        Validators.min(10),
        Validators.max(10),
        Validators.pattern("^((\\+212-?)|0)?[0-9]{10}$")
      ]),
      registerEmail: new FormControl("", [
        Validators.email,
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      registerPassword: new FormControl("", [
        Validators.required
      ]),
      registerRepassword: new FormControl("", [
        Validators.required
      ]),
      registerGender: new FormControl("", [
        Validators.required
      ]),
      registerCity: new FormControl("", [
        Validators.required
      ])
    };
    this.loginform = this.login.group(FormControls1);
    this.registerform = this.register.group(FormControls2);
  }
  get loginPhone() {
    return this.loginform.get('loginPhone');
  }
  get loginPassword() {
    return this.loginform.get('loginPassword');
  }
  get registerName() {
    return this.registerform.get('registerName');
  }
  get registerPhone() {
    return this.registerform.get('registerPhone');
  }
  get registerEmail() {
    return this.registerform.get('registerEmail');
  }
  get registerPassword() {
    return this.registerform.get('registerPassword');
  }
  get registerRepassword() {
    return this.registerform.get('registerRepassword');
  }
  get registerGender() {
    return this.registerform.get('registerGender');
  }
  get registerCity() {
    return this.registerform.get('registerCity');
  }

  ngOnInit() {
    this.segment = "signIn";
    this.height2 = "100%";
    if (this.segment = "signIn") {
      this.height1 = "50%";
      this.change = this.height1;
      this.content = this.height2;
    } else {
    
      this.height1 = "80%";
      this.change = this.height1;
      this.change = this.height2;
    }
  }
  Connexion(data) {
    console.warn(data);
  }

  Register(data) {
    console.warn(data);
  }

}
