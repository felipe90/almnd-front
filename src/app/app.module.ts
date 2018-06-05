import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { CoreModule } from './core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './core/header/header.component';
import { HotelsManagerService } from './shared/services/hotels-manager.service';
import { HotelsModule } from './hotels/hotels.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { NgModule } from '@angular/core';
import { RequestService } from './shared/services/request.service';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    HotelsModule,
    ReactiveFormsModule,
    SharedModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
  ],
  providers: [
    RequestService,
    HotelsManagerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
