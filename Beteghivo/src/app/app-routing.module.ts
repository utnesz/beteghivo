import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CallerScreenComponent } from './common/caller-screen/caller-screen.component';
import { LocalScreenComponent } from './common/local-screen/local-screen.component';
import { MainScreenComponent } from './common/main-screen/main-screen.component';
import { NextNrScreenComponent } from './common/next-nr-screen/next-nr-screen.component';
import { HomeScreenComponent } from './page/home-screen/home-screen.component';

const routes: Routes = [
  {
    path: '',
    component: HomeScreenComponent,
  },
  {
    path: 'caller',
    component: CallerScreenComponent,
  },
  {
    path: 'localScreen',
    component: LocalScreenComponent,
  },
  {
    path: 'mainScreen',
    component: MainScreenComponent,
  },
  {
    path: 'nextNrScreen',
    component: NextNrScreenComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
