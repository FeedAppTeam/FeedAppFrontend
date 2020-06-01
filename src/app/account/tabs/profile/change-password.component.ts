import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class ChangePasswordComponent implements OnInit {
    @Input() profile: any;
    @Output() goBack = new EventEmitter<string>();
    content = '';
    constructor() {}

    ngOnInit() {}

    contentChange() {
        this.content = 'main';
        this.goBack.emit(this.content);
    }

}
