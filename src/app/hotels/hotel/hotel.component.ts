import { Component, Input, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Hotel } from '../models/hotel.model';
import { Rating } from 'primeng/components/rating/rating';
@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css']
})
export class HotelComponent implements OnInit {

  @Input() public hotelModel: Hotel;
  public imageUrl: string;

  readonly detailButtonLabel = 'Ver Hotel';

  constructor() { }

  ngOnInit() {
    this.imageUrl = `${environment.imagesUrl}${this.hotelModel.image}`;
  }

  public openItemDetail() {
    console.log('item detail');
  }
}
