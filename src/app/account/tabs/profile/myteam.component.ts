import { Component, OnInit , Input } from '@angular/core';

@Component({
  selector: 'app-myteam',
  templateUrl: './myteam.component.html',
  styleUrls: ['./profile.page.scss'],
})
export class MyteamComponent implements OnInit {
  @Input() profiles: any;
  constructor() { }

  ngOnInit() {}

}
