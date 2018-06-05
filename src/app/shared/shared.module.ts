import { CommonModule } from '@angular/common';
import { HotelsFiltersComponent } from './components/hotels-filters/hotels-filters.component';
import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';
@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    HttpService,
  ],
  declarations: [HotelsFiltersComponent]
})
export class SharedModule { }
