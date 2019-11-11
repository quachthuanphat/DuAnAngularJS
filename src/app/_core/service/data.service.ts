import { Injectable } from '@angular/core';
import { environment} from '../../../environments/environment'
import { HttpClient } from '@angular/common/http'
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    // 'Authorization': 'my-auth-token'
  })
};
let urlAPI = ""
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) {
    urlAPI = environment.urlAPI;
  }
  
  // GET API
  Get(uri: string): Observable<any> {
    return this.http.get(urlAPI + "/" + uri).pipe(
      tap((data: any) => {
        // Loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    );
  }

  // POST API
  Post(uri: string,data:any): Observable<any>{
    return this.http.post(urlAPI + "/" + uri, data, httpOptions).pipe(
      tap((data: any) => {
        // Loading
      }),
      catchError(err => {
        return this.handleErr(err);
      })
    )
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
}
