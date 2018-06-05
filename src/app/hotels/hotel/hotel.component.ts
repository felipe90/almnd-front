import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from '../models/hotel.model';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input() public hotelModel: Hotel;

  constructor() { }

  ngOnInit() {
    console.log(this.hotelModel);
  }

}
