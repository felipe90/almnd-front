import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CheckboxModule } from 'primeng/primeng';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HotelsFiltersComponent } from './components/hotels-filters/hotels-filters.component';
import { HotelsManagerService } from './services/hotels-manager.service';
import { HttpService } from './services/http.service';
import { InputTextModule } from 'primeng/inputtext';
import { NgModule } from '@angular/core';
import { PanelModule } from 'primeng/panel';
import { RadioButtonModule } from 'primeng/radiobutton';
import { StarsComponent } from './components/stars/stars.component';

@NgModule({
  imports: [
    CommonModule,
    CardModule,
    ButtonModule,
    InputTextModule,
    RadioButtonModule,
    PanelModule,
    FormsModule
  ],
  exports: [
    HotelsFiltersComponent,
    StarsComponent
  ],
  providers: [
    HttpService,
    HotelsManagerService
  ],
  declarations: [HotelsFiltersComponent, StarsComponent]
})
export class SharedModule { }
