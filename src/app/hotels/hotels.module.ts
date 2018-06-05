import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { HotelComponent } from './hotel/hotel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HotelsListComponent, HotelComponent]
})
export class HotelsModule { }
