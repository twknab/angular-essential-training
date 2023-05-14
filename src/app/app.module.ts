import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { MediaItemComponent } from "./media-item.component";
import { MediaItemFormComponent } from "./media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";
import { FavoriteDirective } from "./favorite.directive";
import { CategoryListPipe } from "./category-list.pipe";
import { MediaItemService } from "./media-item.service";

const lookupLists = {
  mediums: ["Movies", "Series"],
};

@NgModule({
  imports: [BrowserModule, ReactiveFormsModule],
  exports: [],
  declarations: [
    AppComponent,
    MediaItemComponent,
    MediaItemListComponent,
    FavoriteDirective,
    CategoryListPipe,
    MediaItemFormComponent,
  ], // components, directives and pipes go here
  bootstrap: [AppComponent],
  // The `provide` property adds a custom provider injection to populate drop down
  providers: [
    MediaItemService,
    { provide: "lookupListToken", useValue: lookupLists },
  ],
})
export class AppModule {}
