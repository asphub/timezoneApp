import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { AppComponent } from './app.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { TimeZoneService } from './_services/time-zone.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    NgSelectModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    {
      provide: 'TimeZoneService',
      useClass: TimeZoneService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
