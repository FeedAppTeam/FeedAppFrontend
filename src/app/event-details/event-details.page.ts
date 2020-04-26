import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-event-details',
  templateUrl: 'event-details.page.html',
  styleUrls: ['event-details.page.scss'],
})
export class EventDetailsPage {
  event: any[] =  [];

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.queryParams.subscribe(params => {
        if (this.router.getCurrentNavigation().extras.state) {
            this.event = this.router.getCurrentNavigation().extras.state.event;
        }
    });
  }
}