import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { tap, map, catchError } from 'rxjs/operators';

import { systems } from '../data/systems.data';
import { System } from '../interfaces/system.interface';

@Injectable({
    providedIn: 'root'
})
export class MonitorService{
    constructor(
        private http: HttpClient
    ) {}

    getSystems(): Observable<System[]> {
        return of(systems)
    }

    checService(url: string): Observable<string> {
        return this.http.get(url, { observe: 'response', responseType: 'text'})
        .pipe(
            map(response => {
                return (response.status === 200)? 'ok': 'fail'
            }),
            catchError(error => of('fail'))
        )
    }
}