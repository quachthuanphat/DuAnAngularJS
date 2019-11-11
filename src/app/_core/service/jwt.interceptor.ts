
import { HttpHandler, HttpInterceptor , HttpRequest , HttpEvent} from '@angular/common/http';
import { catchError,tap } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { Injectable } from '@angular/core';


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const token = JSON.parse(localStorage.getItem("tokenUser"))

    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
        setHeaders: {authorization: `Bearer ${token}`}
    });

    // send cloned request with header to the next handler.
    return next.handle(authReq);
  }
}