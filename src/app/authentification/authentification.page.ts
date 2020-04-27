import { Component, OnInit } from '@angular/core';
import { HostBinding } from '@angular/core';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.page.html',
  styleUrls: ['./authentification.page.scss'],
})
export class AuthentificationPage implements OnInit {
  // Attribute
  @HostBinding('style.height') height1: string;
  @HostBinding('style.height') height2: string;
  segment: string;
  change: string;
  content: string;
  loginForm = {
    username : '',
    password : ''
  };
  registerForm = {
      Name : '',
      phone : '',
      email : '',
      password : '',
      rePassword : '',
      gender : '',
      city : '',
  };
  // loginform: FormGroup;
  // registerform: FormGroup;

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

  // Methods
  constructor(private route: ActivatedRoute, private router: Router) {
      this.route.queryParams.subscribe(params => {
          if (this.router.getCurrentNavigation().extras.state) {
              this.segment = this.router.getCurrentNavigation().extras.state.segment;
          }
      });
     // loginForm
     /*const loginControll = {
        phone: new FormControl('', [
          Validators.pattern('[0-9]{10}$'),
          Validators.required,
          Validators.minLength(10),
          Validators.maxLength(10)
        ]),
        password: new FormControl('', Validators.required)
    };
    // registerForm
     const FormControls2 = {
      registerName: new FormControl('', [
        Validators.required
      ]),
      registerPhone: new FormControl('', [
        Validators.required,
        Validators.min(10),
        Validators.max(10),
        Validators.pattern('^((\\+212-?)|0)?[0-9]{10}$')
      ]),
      registerEmail: new FormControl('', [
        Validators.email,
        Validators.required,
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$')
      ]),
      registerPassword: new FormControl('', [
        Validators.required
      ]),
      registerRepassword: new FormControl('', [
        Validators.required
      ]),
      registerGender: new FormControl('', [
        Validators.required
      ]),
      registerCity: new FormControl('', [
        Validators.required
      ])
    };
     this.loginform = this.formBuilder.group({
         phone: ['', [
                       Validators.pattern('[0-9]{10}$'),
                       Validators.required,
                       Validators.minLength(10),
                       Validators.maxLength(10)
                   ]
                ],
         password: ['', Validators.required]
     });
     this.registerform = this.formBuilder.group(FormControls2);*/
  }
    // convenience getter for easy access to form fields
   /*get loginControl() { return this.loginform.controls; }

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
  }*/

  ngOnInit() {
    this.height2 = '100%';
    if (this.segment === 'signIn') {
      this.height1 = '50%';
      this.change = this.height1;
      this.content = this.height2;
    } else {

      this.height1 = '80%';
      this.change = this.height1;
      this.change = this.height2;
    }
  }
  Connexion(data) {
    console.log(data);
  }

  Register(data) {
    console.log(data);
  }

}
