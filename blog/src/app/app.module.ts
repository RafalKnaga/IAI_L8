import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { QuizComponent } from './components/quiz/quiz.component';
import {RouterTestingModule} from "@angular/router/testing";

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },

  {
    path: 'kontakt',
    component: KontaktComponent,

  {
    path: 'mapa',
    component: MapaComponent,
  },

  {
    path: 'quiz',
    component: QuizComponent,
  },


  }];





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    KontaktComponent,
    MapaComponent,
    QuizComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),


  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
