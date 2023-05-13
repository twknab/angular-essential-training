import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { MediaItemListComponent } from './media-item-list.component';
import { FavoriteDirective } from './favorite.directive';

@NgModule({
  imports: [
    BrowserModule,
  ],
  exports: [],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective
  ], // components, directives and pipes go here
  bootstrap: [
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
