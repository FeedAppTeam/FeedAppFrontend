import { Component, OnInit , Input} from '@angular/core';
import {NavigationExtras, Router} from '@angular/router';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  @Input() events: any;
  constructor(private router: Router) { }

  ngOnInit() {}

    getMoreDetailsEvent(details) {

        const detailsEvent: NavigationExtras = {
            state: {
                event: details
            }
        };
        this.router.navigate(['event-details'], detailsEvent);
    }

}
