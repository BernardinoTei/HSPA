import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { PropretyCardComponent } from './proprety/proprety-card/proprety-card.component';
import { PropretyListComponent } from './proprety/proprety-list/proprety-list.component';

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropretyCardComponent,
      PropretyListComponent
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
