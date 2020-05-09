import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookingFeatureSearchModule } from '@nx-flights/booking/feature-search';
import { HttpClientModule } from '@angular/common/http';
import { BookingFeatureUpgradeModule } from '@nx-flights/booking/feature-upgrade';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, BookingFeatureSearchModule, HttpClientModule, BookingFeatureUpgradeModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
