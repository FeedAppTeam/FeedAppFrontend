import { Component } from '@angular/core';
import {UserService} from '../services/user.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage {
    constructor(private userService: UserService) {
        this.userService.getCurrentUser().subscribe(
            (res) => {
                this.userService.setUser(res.data);
                console.error( this.userService.getUser());
            },
            error => {
                console.log(error);
            }
        );
    }
}
