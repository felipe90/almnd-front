import { environment } from '../../../environments/environment';
import { HttpParams } from '@angular/common/http';
import { HttpService } from './http.service';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/throw';


@Injectable()
export class RequestService {

  readonly ROOT_URL = environment.apiUrl;

  readonly END_POINTS = {
    HOTELS : 'products'
  };

  constructor(
    private http: HttpService
  ) { }

  public getHotels(): Observable<any> {
    // const params = new HttpParams().set('id', id);
    return this.http.get(`${this.ROOT_URL}/${this.END_POINTS.HOTELS}`)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }

  public getHotelById(id: string): Observable<any> {
    return this.http.get(`${this.ROOT_URL}/${this.END_POINTS.HOTELS}/${id}`)
      .map((response: any) => response)
      .catch((error) => {
        return Observable.throw(error);
      });
  }
}
