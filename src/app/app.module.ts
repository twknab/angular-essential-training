import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
  ],
  exports: [],
  declarations: [
    AppComponent,
  ], // components go here
  bootstrap: [
    AppComponent,
  ],
  providers: [],
})
export class AppModule { }
