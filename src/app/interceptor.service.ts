import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";

@Injectable()
export class InterceptorService implements HttpInterceptor {
  BASE_URL = `http://localhost:8080/api/`;

  constructor() {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    console.log(request);
    request = request.clone({
      setHeaders: {},
      url: this.BASE_URL + request.url,
    });

    return next.handle(request);
  }
}
