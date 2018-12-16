import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { KontaktComponent } from './components/kontakt/kontakt.component';
import { MapaComponent } from './components/mapa/mapa.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { BlogComponent } from './components/blog/blog.component';


const appRoutes: Routes = [
  {
    path: '',
    component:HomeComponent,
  },

  {
    path: 'kontakt',
    component:KontaktComponent,
  },

  {
    path: 'mapa',
    component:MapaComponent,
  },

  {
    path: 'quiz',
    component:QuizComponent,
  },

  {
    path: 'blog', 
    component:BlogComponent
  },
];
  



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    KontaktComponent,
    MapaComponent,
    QuizComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]

})
export class AppModule { }
