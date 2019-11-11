import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { tap, catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};
let urlAPI = "";
let DataService = class DataService {
    constructor(http) {
        this.http = http;
        urlAPI = environment.urlAPI;
    }
    // GET API
    Get(uri) {
        return this.http.get(urlAPI + "/" + uri).pipe(tap((data) => {
            // Loading
        }), catchError(err => {
            return this.handleErr(err);
        }));
    }
    // POST API
    Post(uri, data) {
        return this.http.post(urlAPI + "/" + uri, data, httpOptions).pipe(tap((data) => {
            // Loading
        }), catchError(err => {
            return this.handleErr(err);
        }));
    }
    // Handel Lỗi
    handleErr(err) {
        console.log(err);
        switch (err.status) {
            case 500:
                // alert(err.error);
                break;
        }
        return throwError(err);
    }
};
DataService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], DataService);
export { DataService };
//# sourceMappingURL=data.service.js.map