import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { HotelsManagerService } from '../../shared/services/hotels-manager.service';
import { RequestService } from '../../shared/services/request.service';

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
    console.log('asdasd');
    // const query = this.hotelsManagerService.hotelsFilters;

    this.hotelsManagerService.onChangeFilters.subscribe(() => {
      console.log(this.hotelsManagerService.getHotelsFilters());
    });
    this.requestService.getHotels(query).subscribe(res => {
      this.hotelsModel = res;
      console.log(this.hotelsModel);
    });
  }


}
