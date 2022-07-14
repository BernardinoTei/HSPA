import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropretyCardComponent } from './proprety/proprety-card/proprety-card.component';
import { PropretyListComponent } from './proprety/proprety-list/proprety-list.component';
import { HousingService } from './services/housing.service';

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropretyCardComponent,
      PropretyListComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
