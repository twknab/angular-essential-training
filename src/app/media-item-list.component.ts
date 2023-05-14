import { Component, OnInit } from "@angular/core";
import { MediaItemService } from "./media-item.service";

@Component({
  selector: "media-item-list",
  templateUrl: "./media-item-list.component.html",
  styleUrls: ["./media-item-list.component.css"],
})
export class MediaItemListComponent implements OnInit {
  mediaItems;

  constructor(private mediaItemService: MediaItemService) {}

  ngOnInit() {
    // Runs get method on our MediaItemService, sets it to `this.mediaItems`
    this.mediaItemService
      .get()
      // Can take 3 callback argumentse, next, error and execution
      .subscribe((mediaItems) => {
        this.mediaItems = mediaItems;
      });
  }

  onMediaItemDelete(mediaItem) {
    this.mediaItemService.delete(mediaItem);
  }
}
