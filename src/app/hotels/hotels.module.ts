import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HotelsListComponent, HotelComponent],
  declarations: [HotelsListComponent, HotelComponent]
})
export class HotelsModule { }
