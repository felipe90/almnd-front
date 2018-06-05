import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class RequestService {

  readonly ROOT_URL = environment.apiHotelsUrl;

  constructor(
    private httpService: HttpService
  ) { }

  public getHotels(params?: any): Observable<any> {
    return this.httpService.get(`${this.ROOT_URL}`, params)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  public getHotelById(id: string): Observable<any> {
    return this.httpService.get(`${this.ROOT_URL}`)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
