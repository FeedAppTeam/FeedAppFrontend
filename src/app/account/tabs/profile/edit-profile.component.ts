import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class EditProfileComponent  implements OnInit {
  @Input() profiles: any;
  constructor() {}

  ngOnInit() {}

}
