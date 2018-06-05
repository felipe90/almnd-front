import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
import { HotelsFiltersComponent } from './components/hotels-filters/hotels-filters.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    HttpService,
  ],
  declarations: [HotelsFiltersComponent]
})
export class SharedModule { }
