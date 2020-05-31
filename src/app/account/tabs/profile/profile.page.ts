import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Platform } from "@ionic/angular";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.page.html",
  styleUrls: ["./profile.page.scss"],
})
export class ProfilePage implements OnInit {
  profiles: any[] = [];
  // subscription : any;
  public profile: boolean = false;
  public password: boolean = false;
  public team: boolean = false;
  public main: boolean = true;
  constructor(private router: Router, private platform: Platform) {
    this.profiles = [
      {
        informations: {
          name: "Oumaima Amkane",
          city: "Agadir",
          phone: "0641315913",
          email: "ouma@gmail.com",
          password: "oumaima",
          gender: "Female",
          badge1: "gold",
          badge2: "silver",
        },
      },
    ];
  }
  showProfile() {
    this.profile = !this.profile;
    this.main = !this.main;
  }
  showPassword() {
    this.password = !this.password;
    this.main = !this.main;
  }
  showTeam() {
    this.team = !this.team;
    this.main = !this.main;
  }

  ngOnInit() {}
}
