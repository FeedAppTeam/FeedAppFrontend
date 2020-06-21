import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-credit-card-detail',
  templateUrl: './credit-card-detail.page.html',
  styleUrls: ['./credit-card-detail.page.scss'],
})
export class CreditCardDetailPage implements OnInit {
  listOfcards = [{
    name: ''
}];
 
  creditCardForm = {
    owner: '',
    cvv:'',
    cardNumber : '',
    expirationDate : '',
    creditCard:'',
   
};

  constructor() { }

  ngOnInit() {
    this.listOfcards = [
      {
          name: 'visa'
      },
      {
          name: 'masterCard'
      }
    ];
  }

}
