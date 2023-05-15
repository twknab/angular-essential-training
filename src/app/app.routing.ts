import { Routes, RouterModule } from "@angular/router";
import { MediaItemFormComponent } from "./new-item/media-item-form.component";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
  { path: "add", component: MediaItemFormComponent },
  // adding the colon here will actually pass that data to the component which can be used
  { path: ":medium", component: MediaItemListComponent },
  { path: "", redirectTo: "all", pathMatch: "full" },
];

export const routing = RouterModule.forRoot(appRoutes);
