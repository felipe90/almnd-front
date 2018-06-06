import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelsManagerService } from '../../shared/services/hotels-manager.service';
import { Observable } from 'rxjs/Observable';
import { RequestService } from '../../shared/services/request.service';
import 'rxjs/add/operator/switchMap';
@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  private hotelsModel: Hotel[];

  constructor(
    private requestService: RequestService,
    private hotelsManagerService: HotelsManagerService
  ) { }

  ngOnInit() {
    const query = {name: 'Casa', stars: 2};

    this.hotelsManagerService.onChangeFilters
      .switchMap((res) => {
        return this.requestService.getHotels(res);
      })
      .subscribe((res) => {
        this.hotelsModel = res;
      }, (err) => {
        Observable.throw(err);
      });
  }


}
