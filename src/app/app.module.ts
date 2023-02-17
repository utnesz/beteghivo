import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NextNrScreenComponent } from './common/next-nr-screen/next-nr-screen.component';
import { MainScreenComponent } from './common/main-screen/main-screen.component';
import { LocalScreenComponent } from './common/local-screen/local-screen.component';
import { CallerScreenComponent } from './common/caller-screen/caller-screen.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';
import { NavigationComponent } from './common/navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    NextNrScreenComponent,
    MainScreenComponent,
    LocalScreenComponent,
    CallerScreenComponent,
    HomeScreenComponent,
    NavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
