import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [HeaderComponent],
  declarations: [HeaderComponent]
})
export class CoreModule { }
