import { Component } from "@angular/core";

@Component({
  selector: "media-item-form",
  templateUrl: "./media-item-form.component.html",
  styleUrls: ["./media-item-form.component.css"],
})
export class MediaItemFormComponent {
  onSubmit(mediaItem) {
    console.log(mediaItem.value);
  }
}
