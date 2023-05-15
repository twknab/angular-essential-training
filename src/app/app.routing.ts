import { Routes, RouterModule } from "@angular/router";
import { MediaItemListComponent } from "./media-item-list.component";

const appRoutes: Routes = [
  // adding the colon here will actually pass that data to the component which can be used
  {
    path: "add",
    loadChildren: () =>
      import("./new-item/new-item.module").then((m) => m.NewItemModule),
  },
  { path: ":medium", component: MediaItemListComponent },
  { path: "", redirectTo: "all", pathMatch: "full" },
];

export const routing = RouterModule.forRoot(appRoutes);
