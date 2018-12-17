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
import { BlogItemComponent } from './components/blog-item/blog-item.component';
import { BlogItemTextComponent } from './components/blog-item-text/blog-item-text.component';
import { BlogItemImageComponent } from './components/blog-item-image/blog-item-image.component';
import { BlogItemDetailComponent } from './components/blog-item-detail/blog-item-detail.component';





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
  {
    path: 'blog/detail/:id',
    component: BlogItemDetailComponent
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
    BlogComponent,
    BlogItemComponent,
    BlogItemTextComponent,
    BlogItemImageComponent,
    BlogItemDetailComponent




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
