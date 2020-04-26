import { Component, OnInit } from '@angular/core';
@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.page.html',

    styleUrls: ['./create-event.page.scss'],
})

export class CreateEventPage implements OnInit {

    listOfNeeds = [{name: '', number: ''}];
    listOfCity = [];
    listOfActionType = [];
    listOfLeader = [];
    listOfTeam = [];
    createForm = {
        title : '',
        type : '',
        city : '',
        team : '',
        leader : '',
        date : '',
        number : '',
        items : []
    };
    constructor() {
    }

    ngOnInit() {
        this.listOfCity = [
                            {
                              name : 'Casablanca'
                            },
                            {
                                name : 'Agadir'
                            },
                            {
                                name : 'Rabat'
                            },
                            {
                                name : 'Fes'
                            }
                          ];
        this.listOfActionType = [
                                  {
                                      name : 'Type 1'
                                  },
                                  {
                                      name : 'Type 2'
                                  },
                                  {
                                      name : 'Type 3'
                                  }
                              ];
        this.listOfLeader = [];
        this.listOfTeam = [];
        this.createForm = {
            title : '',
            type : '',
            city : '',
            team : '',
            leader : '',
            date : '',
            number : '',
            items : []
        };
    }

    deleteItem(i) {
        this.listOfNeeds.splice(i, 1);
    }

    addItem() {
        this.listOfNeeds.push({name: '', number: ''});
    }

    createEvent() {
        console.log('i have items --> ' + JSON.stringify(this.listOfNeeds));
        this.createForm.items = this.listOfNeeds;
        console.log('createForm :  ' + JSON.stringify(this.createForm));
    }
}
