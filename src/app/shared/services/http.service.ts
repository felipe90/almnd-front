import {
  BaseRequestOptions,
  Headers,
  Http,
  RequestOptions,
  URLSearchParams
  } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()
export class HttpService {

  constructor(
    private http: Http
  ) { }

  public get(url: string, params?: any) {
    const _headers = new Headers();
    const _params = new URLSearchParams();

    _headers.append('Content-Type', 'application/x-www-form-urlencoded');
    for (const key in params) {
      if (params.hasOwnProperty(key)) {
        _params.set(key, params[key]);
      }
    }
    const opts = new RequestOptions({ headers: _headers, params: _params  });

    return this.http.get(url, opts)
      .map((res: any) => res ? JSON.parse(res._body) : [])
      .catch(error => Observable.throw(error));
  }

  public post(url: string, data?: any) {
    return this.http.post(url, data)
      .map((res: any) => res)
      .catch(error => Observable.throw(error));
  }

}
