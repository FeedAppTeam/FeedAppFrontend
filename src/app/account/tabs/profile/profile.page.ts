import {Component, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {JwtResponse} from '../../../models/jwt-response';
import {TokenStorageService} from '../../../services/token-storage.service';
import {ImagePicker, ImagePickerOptions} from "@ionic-native/image-picker/ngx";
import {Camera, CameraOptions} from "@ionic-native/camera/ngx";
import {AvatarDialogComponent} from "../../../avatar-dialog/avatar-dialog.component";
import {ActionSheetController, ModalController, Platform} from "@ionic/angular";
import {File} from "@ionic-native/file/ngx";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  infoUser: JwtResponse = null;
  contentToShow = 'main';
  constructor(public token: TokenStorageService,
              public actionsheetCtrl: ActionSheetController,
              private platform: Platform,
              public imagePicker: ImagePicker,
              public file: File,
              private camera: Camera,
              public modalController: ModalController) {
  }

  ngOnInit() {

  }

  ionViewDidEnter() {
      console.log('from ionViewDidEnter');
      this.getCurrentUser();
  }
  async getCurrentUser() {
    this.infoUser = this.token.getCurrentUser();
    if ((typeof this.infoUser) === 'string' ) {
      this.infoUser = JSON.parse(this.infoUser.toString());
    }
  }

  showProfile() {
    this.contentToShow = 'edit';
  }
  showPassword() {
      this.contentToShow = 'password';
  }
  showTeam() {
      this.contentToShow = 'team';
  }
  setContent(content) {
    (content !== undefined && content !== null) ? this.contentToShow = content : this.contentToShow = 'main';
  }

  async selectAvatar() {
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
                      this.openGallery();
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

  openGallery() {
      const options: ImagePickerOptions = {
          maximumImagesCount : 1,
          width: 512,
          height: 512
      };
      this.imagePicker.getPictures(options).then((results) => {
          const filename = results[0].substring(results[0].lastIndexOf('/') + 1);
          const path = results[0].substring(0 , results[0].lastIndexOf('/') + 1);
          this.file.readAsDataURL(path, filename).then((base64string) => {
              this.infoUser.img = base64string;
              this.token.saveUser(this.infoUser);
          });
      });
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
          this.infoUser.img = 'data:image/jpeg;base64,' + results;
          this.token.saveUser(this.infoUser);
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
          this.infoUser.img = (result.data !== undefined  && result.data !== null &&
                                result.data.avatar !== undefined && result.data.avatar !== null) ?
                                result.data.avatar : this.infoUser.img;
          this.token.saveUser(this.infoUser);
      });

      return await modal.present();
  }
}
