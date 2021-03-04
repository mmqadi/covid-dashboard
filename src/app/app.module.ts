import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CountrySearchComponent } from './country-search/country-search.component';
import { CountryCardComponent } from './country-search/country-card/country-card.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, CountrySearchComponent, CountryCardComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    MatGridListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
