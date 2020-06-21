import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-modal',
  templateUrl: './my-modal.page.html',
  styleUrls: ['./my-modal.page.scss'],
})

export class MyModalPage {

  // Data passed in by componentProps
  @Input() paramID: number;
  @Input() paramTitle: string;
  constructor(private modalController: ModalController,
    public alertController: AlertController,
    private router: Router
  ) {}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    // for this dismiss function
    this.modalController.dismiss({
      'dismissed': true
    });
  }

  async bankAlert() {
    const alert = await this.alertController.create({
      subHeader: 'Donation by payment to the X bank for the benefit of: RIB: XXXXXXXXX SWIFT: XXXXXX Holder: XXXXXXXX. Then please send your receipt on Whatsapp to the following number: + 212XXXXXX',
      message: 'Thank you!',
      buttons: ['OK']
    });
    await alert.present();
  }
  
  async needsAlert() {
    let alert = await this.alertController.create({
      header: 'Are you offering one of our needs?',
      inputs: [{
          name: 'need',
          placeholder: 'Which need?'
        },
        {
          name: 'number',
          placeholder: 'Number of need',
          type: 'number'
        }
      ],
      buttons: [{
        text: 'Donate Now'
      }]
    });
    await alert.present();
  }

  async othersAlert() {
    let alert = await this.alertController.create({
      header: 'Are you offering other items?',
      inputs: [{
          name: 'item',
          placeholder: 'Which Item?'
        },
        {
          name: 'number',
          placeholder: 'Number of Item',
          type: 'number'
        }
      ],
      buttons: [{
        text: 'Donate Now'
      }]
    });
    await alert.present();
  }
  creditCard(){
    this.router.navigate(["/credit-card-detail"]);
    this.dismiss();
  }
}