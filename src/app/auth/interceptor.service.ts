import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class InterceptorService implements HttpInterceptor {
  BASE_URL = `localhost:8080/api`;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    request = request.clone({
      setHeaders: {},
      url: this.BASE_URL = request.url
    });

    return next.handle(request);
  }
}
