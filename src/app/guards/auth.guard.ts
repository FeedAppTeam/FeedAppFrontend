import { Injectable } from '@angular/core';
import { CanActivate} from '@angular/router';
import {TokenStorageService} from '../services/token-storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(
        public token: TokenStorageService
    ) {
    }

    canActivate(): boolean {
        return this.token.isAuthenticated();
    }
}
