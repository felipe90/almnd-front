import { CommonModule } from '@angular/common';
import { HttpService } from './services/http.service';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    HttpService,
  ],
  declarations: []
})
export class SharedModule { }
