import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';

const httpOptions = {
    headers: new HttpHeaders({
         'Content-Type': 'application/json'
         })
};

@Injectable({
    providedIn: 'root'
})
export class CountryService {
    private countries = null;
   // apiUrl =  'https://feedapp01.herokuapp.com/api';
    apiUrl =  'http://localhost:3000/api/countries';
    private countryByNameUrl = this.apiUrl + '/';

    constructor(private http: HttpClient) {

    }

    getAllCourntries(): Observable<any> {
        return this.http.get<any>(this.apiUrl, httpOptions);
    }

    getCourntryByName(name: string): Observable<any> {
        return this.http.get<any>(this.countryByNameUrl + name, httpOptions);
    }

    createCountry(country): Observable<any> {
        return this.http.post<any>(this.apiUrl , country, httpOptions);
    }

    setCountries(countries) {
        this.countries = countries;
    }

    getCountries() {
        return this.countries;
    }
}
