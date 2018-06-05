import { Component, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';
import { RequestService } from '../../shared/services/request.service';

@Component({
  selector: 'app-hotels-list',
  templateUrl: './hotels-list.component.html',
  styleUrls: ['./hotels-list.component.css']
})
export class HotelsListComponent implements OnInit {

  private hotelsModel: Hotel[];

  constructor(
    private requestService: RequestService
  ) { }

  ngOnInit() {
    this.requestService.getHotels().subscribe(res => {
      console.log(res);
    });
  }


}
