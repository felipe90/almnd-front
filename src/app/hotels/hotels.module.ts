import { ButtonModule, CardModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { HotelComponent } from './hotel/hotel.component';
import { HotelsListComponent } from './hotels-list/hotels-list.component';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    SharedModule,
  ],
  exports: [HotelsListComponent, HotelComponent],
  declarations: [HotelsListComponent, HotelComponent]
})
export class HotelsModule { }
