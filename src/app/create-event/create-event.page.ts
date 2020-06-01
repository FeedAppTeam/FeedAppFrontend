import {
    Component,
    OnInit
} from '@angular/core';
@Component({
    selector: 'app-create-event',
    templateUrl: './create-event.page.html',
    styleUrls: ['./create-event.page.scss'],
})

export class CreateEventPage implements OnInit {

    listOfNeeds = [{
        name: '',
        number: ''
    }];
    listOfCity = [];
    listOfActionType = [];
    listOfLeader = [];
    listOfTeam = [];
    createForm = {
        title: '',
        type: '',
        city: '',
        team: '',
        leader: '',
        date: '',
        number: '',
        items: []
    };

    constructor() {}

    ngOnInit() {
        this.listOfCity = [
            {
                name: 'Rabat',
                abbrev: 'rabat'
            },
            {
                name: 'Casablanca',
                abbrev: 'casa'
            },
            {
                name: 'Mohammadia',
                abbrev: 'mohammadia'
            },
            {
                name: 'Agadir',
                abbrev: 'agadir'
            },
            {
                name: 'Oujda',
                abbrev: 'oujda'
            },
            {
                name: 'Laayoune',
                abbrev: 'laayoune'
            },
            {
                name: 'El Houcima',
                abbrev: 'elhoucima'
            },
            {
                name: 'Fes',
                abbrev: 'fes'
            },
            {
                name: 'Meknes',
                abbrev: 'meknes'
            },
            {
                name: 'Kenitra',
                abbrev: 'kenitra'
            },
            {
                name: 'Laaraich',
                abbrev: 'laaraich'
            },
            {
                name: 'Marrakech',
                abbrev: 'kech'
            },
            {
                name: 'Tanger',
                abbrev: 'tanger'
            },
            {
                name: 'Tetouane',
                abbrev: 'tetouane'
            },
            {
                name: 'Tiznit',
                abbrev: 'tiznit'
            },
            {
                name: 'Tifelt',
                abbrev: 'tifelt'
            },
            {
                name: 'Safi',
                abbrev: 'safi'
            },
            {
                name: 'El Jadida',
                abbrev: 'el jadida'
            },
            {
                name: 'Missour',
                abbrev: 'missour'
            },
        ];
        this.listOfActionType = [
            {
                name: 'Type 1'
            },
            {
                name: 'Type 2'
            },
            {
                name: 'Type 3'
            }
        ];
        this.listOfTeam = ['A', 'B', 'C', 'D', 'E'];
        this.listOfLeader = ['A', 'B', 'C', 'D', 'E'];
        this.createForm = {
            title: '',
            type: '',
            city: '',
            team: '',
            leader: '',
            date: '',
            number: '',
            items: this.listOfNeeds
        };
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

    deleteItem(i) {
        this.listOfNeeds.splice(i, 1);
    }

    addItem() {
        this.listOfNeeds.push({
            name: '',
            number: ''
        });

    }

    createEvent() {
        console.log('i have items --> ' + JSON.stringify(this.listOfNeeds));
        this.createForm.items = this.listOfNeeds;
        console.log('createForm :  ' + JSON.stringify(this.createForm));
    }


}