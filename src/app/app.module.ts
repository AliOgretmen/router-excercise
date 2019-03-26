import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountryComponent } from './components/country/country.component';
import { CityComponent } from './components/city/city.component';
import { FlagComponent } from './components/flag/flag.component';
import { InfoService } from './services/info.service';

@NgModule({
  declarations: [
    AppComponent,
    CountryComponent,
    CityComponent,
    FlagComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [InfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
