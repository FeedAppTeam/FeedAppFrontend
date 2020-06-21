import { Component, OnInit } from '@angular/core';
import { Headers, RequestOptions } from '@angular/http';
import { LoadingController } from '@ionic/angular';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-paypal-detail',
  templateUrl: './paypal-detail.page.html',
  styleUrls: ['./paypal-detail.page.scss'],
})
export class PaypalDetailPage implements OnInit {

  paypalDetailForm = {
    amount: '',


  };
  ionLoading: any;
  //  http: any;
  amount: any;

  iab: any;
  constructor(public LoadingController: LoadingController,
    private http: HttpClient) {}

  ngOnInit() {}


  async donate() {
    let data = {
      amount: this.amount
    }

    let loader = await this.LoadingController.create({
      message: 'Please Wait...'
    });

    loader.present();

    var headers = new Headers();
    headers.append("Accept", 'application/json');
    headers.append('Content-Type', 'application/json');
    let options = new RequestOptions({
      headers: headers
    });

    // this.http
    // .post('http://192.168.178.179:3000/createPayment/', JSON.stringify(data), options)
    // .pipe(
    //   map((res => res.json()).subscribe((data:any) => {
    //   console.log('Response From Server: ' + data.links[1].href);

    //   var browser = this.iab.create(data.links[1].href);
    //   loader.dismiss();
    //   this.amount = "";
    // })));
  }




}