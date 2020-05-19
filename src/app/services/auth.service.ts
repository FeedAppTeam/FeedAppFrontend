import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {BehaviorSubject, Observable} from 'rxjs';

import { JwtResponse } from '../models/jwt-response';
import { AuthLoginInfo } from '../models/login-info';
import { SignUpInfo } from '../models/signup-info';
import {MessageResponse} from '../models/message-response';
import {environment} from '../../environments/environment';


const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    // private loginUrl = 'http://localhost:8081/api/auth/signin';
    // private signupUrl = 'http://localhost:8081/api/auth/signup';
    private loginUrl = environment.apiUrl + '/auth/signin';
    private signupUrl = environment.apiUrl + '/auth/signup';

     constructor(private http: HttpClient/*, private storage: Storage*/) {

    }

    attemptAuth(credentials: AuthLoginInfo): Observable<JwtResponse> {
        return this.http.post<JwtResponse>(this.loginUrl, credentials, httpOptions);
    }

    signUp(info: SignUpInfo): Observable<MessageResponse> {
        return this.http.post<MessageResponse>(this.signupUrl, info, httpOptions);
    }
}
