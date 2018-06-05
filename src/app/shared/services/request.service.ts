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
    private http: HttpService
  ) { }

  public getHotels(): Observable<any> {
    console.log(`${this.ROOT_URL}`);
    return this.http.get(`${this.ROOT_URL}`)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  public getHotelById(id: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}`)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
