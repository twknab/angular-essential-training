import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  exports: [],
  declarations: [
    AppComponent,
    MediaItemComponent,
  ], // components go here
  bootstrap: [
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
