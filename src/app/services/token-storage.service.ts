import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, Subject} from 'rxjs';
import {JwtResponse} from '../models/jwt-response';
import {Router} from '@angular/router';
import {UserService} from "./user.service";

const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private currentUser: JwtResponse;
  private token: string;
  userInfo$ = new Subject<any>();

  constructor(private storage: Storage, private router: Router,
              private userService: UserService) {
      this.storage.get(USER_KEY).then((v) => {
          this.userInfo$.next(v);
          if ((typeof v) === 'string') {
              this.currentUser = JSON.parse(v);
          }
          if ( v !== undefined && v !== null) {
              this.currentUser = v;
              this.token = this.currentUser.accessToken;
          }
      });
  }

  signOut() {
      this.storage.clear().then(() => {
          this.userInfo$.next(null);
          this.router.navigate(['home']);
          this.currentUser = null;
          this.token = null;
          this.userService.setUser(null);
      });
  }

  isAuthenticated() {
    const tok = this.getCurrentUser();
    if (tok !== undefined && tok !== null) {
        return true;
    } else {
        return false;
    }
  }

   getObservableUser(): Observable<any> {
      return this.userInfo$.asObservable();
   }

    public saveUser(data: JwtResponse) {
        this.setData(JSON.stringify(data), USER_KEY);
        this.userInfo$.next(data);
        this.currentUser = data;
        this.token = data.accessToken;
    }

   public getCurrentUser() {
       return this.currentUser;
   }

    public getToken() {
        let user = this.getCurrentUser();
        if ((typeof user) === 'string' ) {
            user = JSON.parse(user.toString());
        }
        if (user !== undefined && user !== null) {
            this.token = user.accessToken;
        } else {
            this.token = '';
        }
        return this.token;
    }

    setData<T>(data: T, dataName): void {
        this.storage.set(dataName, data);
    }

    async  getData<T>(dataName): Promise<any> {
      try {
            const result =  await this.storage.get(dataName);
            return result;
        } catch (e) { console.log(e); }
    }


}
