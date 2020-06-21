"use strict";
const express = require ('express');
const app = require('express')();
const cors = require ('cors');
const bodyParser = require ('body-Parser');
const paypal = require ('paypal-rest-sdk');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

paypal.configure({
    'mode': 'sandbox', //sandbox or live
    'client_id': 'AU3TS4K-bXmUs7LST7NdboUleneQdxX2CPLrxNEix6UTuRvgDeKilbsYmpDjcUMInINNC8S9UFo10tCJ',
    'client_secret': 'EPv4Y61CfEjODMIC4NyaffLUBTV5eFCM3t3hTgD33MmJlkjfc2NJJLbR1L_2CvSvkwBmgX7IWz-6SyXY'
  });

  app.globalAmount = 0;
  app.post('/createPayment', function(req, res){
    app.globalAmount = req.body.amount;
    var create_payment_json = {
        "intent": "sale",
        "payer": {
            "payment_method": "paypal"
        },
        "redirect_urls": {
            "return_url": "http://192.168.178.179:3030/executePayment",
            "cancel_url": "http://192.168.178.179:3000/cancelPayment"
        },
        "transactions": [{
            "item_list": {
                "items": [{
                    "name": "item",
                    "sku": "item",
                    "price": req.body.amount,
                    "currency": "USD",
                    "quantity": 1
                }]
            },
            "amount": {
                "currency": "USD",
                "total": req.body.amount
            },
            "description": "This is the payment description."
        }]
    };
    
    
    paypal.payment.create(create_payment_json, function (error, payment) {
        if (error) {
            throw error;
        } else {
            console.log("Create Payment Response");
            console.log(payment);
        }
    });
  })

  app.listen('3000', function(){
console.log('server running on port 3030');
  })