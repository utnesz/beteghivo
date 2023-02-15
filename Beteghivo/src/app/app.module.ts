import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BetegComponent } from './common/beteg/beteg.component';
import { NextNrScreenComponent } from './common/next-nr-screen/next-nr-screen.component';
import { MainScreenComponent } from './common/main-screen/main-screen.component';
import { LocalScreenComponent } from './common/local-screen/local-screen.component';
import { CallerScreenComponent } from './common/caller-screen/caller-screen.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    BetegComponent,
    NextNrScreenComponent,
    MainScreenComponent,
    LocalScreenComponent,
    CallerScreenComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
