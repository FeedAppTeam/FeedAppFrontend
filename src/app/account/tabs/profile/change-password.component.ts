import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-change-password',
  templateUrl: './change-password.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class ChangePasswordComponent implements OnInit {
  @Input() profiles: any;
  constructor() { }

  ngOnInit() {}

}
