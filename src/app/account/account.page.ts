import { Component } from "@angular/core";
import { Camera } from "@ionic-native/camera/ngx";
import { PickerController } from "@ionic/angular";
import { PickerOptions } from "@ionic/core";
import { async } from "@angular/core/testing";

@Component({
  selector: "app-account",
  templateUrl: "./account.page.html",
  styleUrls: ["./account.page.scss"],
})
export class AccountPage {
  imgURL = "../../assets/Images/avatar.png";
  option = "";
  selected = [""];
  constructor(private camera: Camera, private pickerctrl: PickerController) {}

  async picker() {
    let options: PickerOptions = {
      buttons: [
        {
          text: "Cancel",
          role: "cancel",
          handler: (value) => {
            console.log(value, "cancel");
          },
        },
        {
          text: "Confirm",
          handler: (value) => {
            console.log(value, "confirm");
          },
        },
      ],
      columns: [
        {
          name: "option",
          options: [
            {
              text: "camera",
              value: "c",
            },
            {
              text: "gallery",
              value: "g",
            },
          ],
        },
      ],
    };
    let picker = await this.pickerctrl.create(options);
    picker.present();
    picker.onDidDismiss().then(async (data) => {
      // console.log('data:',data);
      let option = await picker.getColumn("option");
      this.selected = [option.options[option.selectedIndex].value];

      if (option.options[option.selectedIndex].value == "c") {
        this.getCamera();
      } else if (option.options[option.selectedIndex].value == "g") {
        this.getGallery();
      }
    });
  }
  getCamera() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.CAMERA,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then((res) => {
        this.imgURL = "data:image/jpeg;base64," + res;
      })
      .catch((e) => {
        console.log(e);
      });
  }

  getGallery() {
    this.camera
      .getPicture({
        sourceType: this.camera.PictureSourceType.PHOTOLIBRARY,
        destinationType: this.camera.DestinationType.DATA_URL,
      })
      .then((res) => {
        this.imgURL = "data:image/jpeg;base64," + res;
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
