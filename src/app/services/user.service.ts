import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../models/user';


const httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json'
         })
};

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private logedUser: User;
   // apiUrl =  'https://feedapp01.herokuapp.com/api';
    apiUrl =  'http://localhost:3000/api/users';
    private currentUserUrl = this.apiUrl + '/me';
    private userByPhoneUrl = this.apiUrl + '/phone/';
    private userSeachUrl = this.apiUrl + '/search';

    constructor(private http: HttpClient) {

    }
    /* work only for admin */
    getAllUsers(): Observable<any> {
        return this.http.get<any>(this.apiUrl, httpOptions);
    }

    searchForUser(value: string): Observable<any> {
        return this.http.get<any>(this.userSeachUrl + '?value=' + value, httpOptions);
    }

    getCurrentUser(): Observable<any> {
        return this.http.get<any>(this.currentUserUrl, httpOptions);
    }

    getUserByPhone(phone: string): Observable<any> {
        return this.http.get<any>(this.userByPhoneUrl + phone, httpOptions);
    }

    updateUser(user): Observable<any> {
        return this.http.patch(this.apiUrl , user, httpOptions);
    }

    participate(eventId: number): Observable<any> {
        return this.http.put(this.apiUrl + '/' + eventId , httpOptions);
    }

    deleteUser(userId: number): Observable<any> {
        return this.http.delete(this.apiUrl + '/' + userId , httpOptions);
    }

    setUser(user) {
        this.logedUser = user;
    }

    getUser() {
        return this.logedUser;
    }
}
