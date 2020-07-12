import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ActionSheetController, AlertController, ModalController, Platform} from '@ionic/angular';
import {AuthService} from '../services/auth.service';
import {SignUpInfo} from '../models/signup-info';
import {ImagePicker, ImagePickerOptions} from '@ionic-native/image-picker/ngx';
import {File} from '@ionic-native/file/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import {AvatarDialogComponent} from '../avatar-dialog/avatar-dialog.component';
import countriesJson from '../../assets/data/countriesNegatif.json';
import {CountryService} from '../services/country.service';

class Country {
    public name: string;
    public negatif: string;
    public abrev: string;
}
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupInfo: SignUpInfo;
  isSignedUp = false;
  isSignUpFailed = false;
  errorMessage = '';
  showSplashRegister = false;
  showOTPInput = false;
  OTPmessage = 'An OTP is sent to your number. You should receive it in 15 s';
  OTP = [];
  urlAvatarProfile = 'assets/avatar/avatar1.png';
  registerForm = {
    name : '',
    phone : '',
    email : '',
    password : '',
    rePassword : '',
    gender : '',
    city : null,
    country: '',
    img: this.urlAvatarProfile
  };
  genders = [
     {name: 'Male', abbrev: 'male'},
     {name: 'Female', abbrev: 'female'},
     {name: 'Other', abbrev: 'other'}];
  countries = [];
  error = false;
  counrtiesNegatif: Country[];
  country: Country;
  constructor( private platform: Platform,
               private route: ActivatedRoute,
               private router: Router,
               private authService: AuthService,
               public alertController: AlertController,
               public actionsheetCtrl: ActionSheetController,
               public imagePicker: ImagePicker,
               public file: File,
               private camera: Camera,
               public modalController: ModalController,
               private countryService: CountryService) {
  }

  ngOnInit() {
      this.counrtiesNegatif = countriesJson.countries;
      this.country = {
          name : 'MOROCCO',
          negatif : '+212',
          abrev : 'ma'
      };
      this.getCountries();
  }

  async getCountries() {
      if (this.countryService.getCountries() === undefined || this.countryService.getCountries() === null) {
          this.countryService.getAllCourntries().subscribe(
              (res) => {
                  this.countries = res.data;
                  this.countryService.setCountries(res.data);
              },
              (err) => {
                  console.log(err);
              }
          );
      } else {
          this.countries = this.countryService.getCountries();
      }
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

  next(nameInput, phoneInput, passwordInput, repasswordInput, emailInput, genderInput, cityInput) {
    if (this.registerForm.name === '' || this.registerForm.phone === '' || this.registerForm.email === '' ||
        this.registerForm.password === '' || this.registerForm.rePassword === '' || this.registerForm.gender === '' ||
        this.registerForm.city === '' || this.registerForm.rePassword !== this.registerForm.password ) {
      this.error = true;
    } else if (!(nameInput.invalid && (nameInput.dirty || nameInput.touched)) &&
              !(phoneInput.invalid && (phoneInput.dirty || phoneInput.touched)) &&
              !(passwordInput.invalid && (passwordInput.dirty || passwordInput.touched)) &&
              !(repasswordInput.invalid && (repasswordInput.dirty || repasswordInput.touched)) &&
              !(emailInput.invalid && (emailInput.dirty || emailInput.touched)) &&
              !(genderInput.invalid && (genderInput.dirty || genderInput.touched)) &&
              !(cityInput.invalid && (cityInput.dirty || cityInput.touched))
              ) {
                    this.error = false;
                    this.showOTPInput = true;
    } else {
      this.error = true;
    }
  }

  register() {
      this.error = false;
      this.showSplashRegister = true;
      this.changeTheme();

      this.signupInfo = new SignUpInfo(
            this.registerForm.name ,
            this.country.negatif + '' + this.registerForm.phone ,
            this.registerForm.email ,
            this.registerForm.city,
            this.registerForm.password,
            this.urlAvatarProfile,
            this.registerForm.gender
      );
      this.authService.signUp(this.signupInfo).subscribe(
          async (data) => {
              console.log(data);
              this.isSignedUp = true;
              this.isSignUpFailed = false;
              this.showSplashRegister = false;
              const alert = await this.alertController.create({
                  header: 'Info',
                  message: 'Your registration is successful. Please login!',
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
          },
          error => {
              this.showSplashRegister = false;
              this.changeTheme();
              this.errorMessage = error.error.message;
              this.isSignUpFailed = true;
          }
      );
  }
  async selectAvatar(fileLoader) {
      const actionSheet = await this.actionsheetCtrl.create({
          header: 'Profil picture',
          cssClass: 'action-sheets-basic-page',
          buttons: [
              {
                  text: 'Take photo',
                  role: 'destructive',
                  icon: this.platform.is('ios') ? 'ios-camera-outline' : 'camera-outline',
                  handler: () => {
                       this.takephoto(1);
                  }
              },
              {
                  text: 'Photo from Gallery',
                  role: 'destructive',
                  icon: this.platform.is('ios') ? 'ios-images-outline' : 'image-outline',
                  handler: () => {
                        this.openGallery(fileLoader);
                  }
              },
              {
                  text: 'From FeedApp Avatar',
                  role: 'destructive',
                  icon: this.platform.is('ios') ? 'ios-images-outline' : 'image-outline',
                  handler: async () => {
                      this.openDialog();
                  }
              }
          ]
      });
      await actionSheet.present();
  }

  openGallery(fileLoader) {
      if (this.platform.is('desktop')) {
          fileLoader.click();
          const that = this;
          fileLoader.onchange =  () => {
              const file = fileLoader.files[0];
              const reader = new FileReader();

              reader.addEventListener('load',  () => {
                  that.getOrientation(fileLoader.files[0], (orientation) => {
                      if (orientation > 1) {
                          that.resetOrientation(reader.result, orientation,  (resetBase64Image) => {
                              that.urlAvatarProfile = resetBase64Image;
                          });
                      } else {
                          that.urlAvatarProfile = reader.result.toString();
                      }
                  });
              }, false);

              if (file) {
                  reader.readAsDataURL(file);
              }
          };
      } else {
          const options: ImagePickerOptions = {
              maximumImagesCount : 1,
              width: 512,
              height: 512
          };
          this.imagePicker.getPictures(options).then((results) => {
              const filename = results[0].substring(results[0].lastIndexOf('/') + 1);
              const path = results[0].substring(0 , results[0].lastIndexOf('/') + 1);
              this.file.readAsDataURL(path, filename).then((base64string) => {
                  this.urlAvatarProfile = base64string;
              });
          });
      }

  }

  getOrientation(file, callback) {
        const reader = new FileReader();
        reader.onload = (e: any) => {

            const view = new DataView(e.target.result);
            if (view.getUint16(0, false) !== 0xFFD8) { return callback(-2); }
            const length = view.byteLength;
            let offset = 2;
            while (offset < length) {
                const marker = view.getUint16(offset, false);
                offset += 2;
                if (marker === 0xFFE1) {
                    if (view.getUint32(offset += 2, false) !== 0x45786966) { return callback(-1); }
                    const little = view.getUint16(offset += 6, false) === 0x4949;
                    offset += view.getUint32(offset + 4, little);
                    const tags = view.getUint16(offset, little);
                    offset += 2;
                    for (let i = 0; i < tags; i++) {
                        if (view.getUint16(offset + (i * 12), little) === 0x0112) {
                            return callback(view.getUint16(offset + (i * 12) + 8, little));
                        }
                    }
                } else if ((marker & 0xFF00) !== 0xFF00) { break; } else { offset += view.getUint16(offset, false); }
            }
            return callback(-1);
        };
        reader.readAsArrayBuffer(file);
    }
    resetOrientation(srcBase64, srcOrientation, callback) {
        const img = new Image();

        img.onload = () => {
            const width = img.width,
            height = img.height,
            canvas = document.createElement('canvas'),
            ctx = canvas.getContext('2d');

            // set proper canvas dimensions before transform & export
            if (4 < srcOrientation && srcOrientation < 9) {
                canvas.width = height;
                canvas.height = width;
            } else {
                canvas.width = width;
                canvas.height = height;
            }

            // transform context before drawing image
            switch (srcOrientation) {
                case 2: ctx.transform(-1, 0, 0, 1, width, 0); break;
                case 3: ctx.transform(-1, 0, 0, -1, width, height); break;
                case 4: ctx.transform(1, 0, 0, -1, 0, height); break;
                case 5: ctx.transform(0, 1, 1, 0, 0, 0); break;
                case 6: ctx.transform(0, 1, -1, 0, height, 0); break;
                case 7: ctx.transform(0, -1, -1, 0, height, width); break;
                case 8: ctx.transform(0, -1, 1, 0, 0, width); break;
                default: break;
            }

            // draw image
            ctx.drawImage(img, 0, 0);

            // export base64
            callback(canvas.toDataURL());
        };

        img.src = srcBase64;
    }
  takephoto(type: number) {

      const options: CameraOptions = {
          quality: 100,
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: type,
          allowEdit: false,
          encodingType: this.camera.EncodingType.JPEG,
          targetWidth: 1280,
          targetHeight: 1280,
          mediaType: this.camera.MediaType.PICTURE,
          correctOrientation: true,
          saveToPhotoAlbum: false,
          cameraDirection: this.camera.Direction.BACK
      };

      this.camera.getPicture(options).then((results) => {
            this.urlAvatarProfile = 'data:image/jpeg;base64,' + results;
      });
   }

  async openDialog() {
       const modal = await this.modalController.create({
           component: AvatarDialogComponent,
           cssClass: 'my-custom-modal-css',
           swipeToClose: true,
           presentingElement: await this.modalController.getTop()
       });

       modal.onDidDismiss().then((result) => {
           this.urlAvatarProfile = (result.data !== undefined  && result.data !== null &&
                                    result.data.avatar !== undefined && result.data.avatar !== null) ?
                                    result.data.avatar : this.urlAvatarProfile;
       });

       return await modal.present();
  }

  changeTheme() {
        // State changes
        const content = document.querySelector('app-register ion-content');
        const header = document.querySelector('app-register ion-header');
        const buttons = document.querySelectorAll('app-register ion-button');
        content.classList.toggle('dialogIsOpen');
        header.classList.toggle('dialogIsOpen');

        buttons.forEach((btn) => {
            btn.classList.toggle('pointerEvent');
        });
  }
  otpController(event, next, prev) {
        if (event.target.value.length < 1 && prev) {
            prev.setFocus();
        } else if (next && event.target.value.length > 0) {
            next.setFocus();
        }  else {
            event.target.blur();
        }
  }

  phoneCountryChange() {
        document.getElementById('phoneBlock').classList.toggle('item-has-focus');
        document.getElementById('phone').classList.toggle('has-focus');
  }

  openSelectable() {
        const element: HTMLElement = document.getElementsByClassName('ionic-selectable-cover')[0] as HTMLElement;
        element.click();
  }
}
