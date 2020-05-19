import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Observable, Subject} from 'rxjs';
import {JwtResponse} from '../models/jwt-response';
import {Router} from '@angular/router';

const TOKEN_KEY = 'AuthToken';
const PHONE_KEY = 'AuthPhone';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NAME_KEY = 'AuthName';
const USER_KEY = 'currentUser';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  private roles: Array<string> = [];
  private currentUser: JwtResponse;
  private token: string;
  userInfo$ = new Subject<any>();

  constructor(private storage: Storage, private router: Router) {
      this.storage.get(USER_KEY).then((v) => {
          this.userInfo$.next(v);
          if ((typeof v) === 'string')
              this.currentUser = JSON.parse(v);
          if( v !== undefined && v !== null)
              this.currentUser = v;

          this.token = this.currentUser ? this.currentUser.accessToken : null;
      });
  }

  signOut() {
      this.storage.clear().then(() => {
          this.userInfo$.next(null);
          this.router.navigate(['home']);
          this.currentUser = null;
          this.token = null;
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

    public getToken(): string {
        return this.token;
    }

   /*
    public saveName(name: string) {
        return this.setData(name, NAME_KEY);
    }

    public getName(): string {
        const value = this.getData<string>(NAME_KEY);
        value.then((v) => {
            this.name = v;
        });
        return this.name;
    }
    public savePhone(phone: string) {
        return this.setData(phone, PHONE_KEY);
    }

    public getPhone(): string {
      const value =  this.getData<string>(PHONE_KEY);
      value.then((v) => {
          this.phone = v;
      });
      return this.phone;
    }

    public saveAuthorities(authorities: string[]) {
      return this.setData(JSON.stringify(authorities), AUTHORITIES_KEY);
    }

    public getAuthorities(): string[] {
        this.roles = [];
        const value = this.getData<any>(AUTHORITIES_KEY).then((val) => {
            if (val !== null) {
                JSON.parse(val).forEach(authority => {
                    this.roles.push(authority.authority);
                });
            }
            return this.roles;
        });
        value.then((v) => {
              this.roles = v;
        });
        return this.roles;
    }*/

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
