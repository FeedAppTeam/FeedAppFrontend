import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class EditProfileComponent  implements OnInit {
  @Input() profile: any;
  @Output() goBack = new EventEmitter<string>();
  content = '';
  imgURL = '../../assets/avatar/avatar1.png';

  constructor() {}

  ngOnInit() {}

  contentChange() {
    this.content = 'main';
    this.goBack.emit(this.content);
  }
}
