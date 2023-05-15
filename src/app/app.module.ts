import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemService } from "./media-item.service";
import { lookupListToken, lookupLists } from "./providers";
import { HttpClientModule, HttpXhrBackend } from "@angular/common/http";
import { MockXHRBackend } from "./mock-xhr-backend";
import { routing } from "./app.routing";
import { NewItemModule } from "./new-item/new-item.module";

@NgModule({
  imports: [BrowserModule, HttpClientModule, routing, NewItemModule],
  exports: [],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
  ], // components, directives and pipes go here
  bootstrap: [AppComponent],
  // The `provide` property adds a custom provider injection to populate drop down
  providers: [
    MediaItemService,
    // Using tokens like this is another way to inject a provider, but this is not always best practices
    // Let's refactor to use a Injection Token that is better practices
    { provide: lookupListToken, useValue: lookupLists },
    { provide: HttpXhrBackend, useClass: MockXHRBackend },
  ],
})
export class AppModule {}
