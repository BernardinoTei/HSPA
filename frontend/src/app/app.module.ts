import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AddPropretyComponent } from './proprety/add-proprety/add-proprety.component';
import { PropretyCardComponent } from './proprety/proprety-card/proprety-card.component';
import { PropretyListComponent } from './proprety/proprety-list/proprety-list.component';
import { HousingService } from './services/housing.service';
import { PropretyDetailComponent } from './proprety/proprety-detail/proprety-detail.component';

const appRoutes: Routes = [
  {path: 'proprety-list', component: PropretyListComponent},
  {path: 'buy-proprety', component: PropretyListComponent},
  {path: 'rent-proprety', component: PropretyListComponent},
  {path: 'add-proprety', component: AddPropretyComponent},
  {path: 'proprety-detail/:id', component: PropretyDetailComponent},
  {path: '**', component: PropretyListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
      NavBarComponent,
      PropretyCardComponent,
      PropretyListComponent,
      AddPropretyComponent,
      PropretyDetailComponent
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [
    HousingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
