import {HTTP_INTERCEPTORS, HttpEvent} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';

import { TokenStorageService } from './token-storage.service';
import {Observable} from 'rxjs';

const TOKEN_HEADER_KEY = 'Authorization';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    tokenValue: string;
    constructor(private token: TokenStorageService) {
        this.getToken();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let authReq = req;
        this.getToken();
        if (this.tokenValue != null) {
            authReq = req.clone({ headers: req.headers.set(TOKEN_HEADER_KEY, 'Bearer ' + this.tokenValue) });
        }
        return next.handle(authReq);
    }
    async getToken() {
        /*let user = this.token.getCurrentUser();
        if ((typeof user) === 'string' ) {
            user = JSON.parse(user.toString());
        }
        this.tokenValue = user.accessToken;*/
        this.tokenValue = this.token.getToken();
    }
}

export const httpInterceptorProviders = [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
];
