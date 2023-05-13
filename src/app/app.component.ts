import { Component, OnInit } from '@angular/core';
import { MediaItemComponent } from './media-item.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent {
  constructor() { }

  firstMediaItem = {
    id: 1,
    name: "Firebug",
    medium: "Series",
    category: "Science Fiction",
    year: 2010,
    watchedOn: 1284166565384,
    isFavorite: false,
  }

  onMediaItemDelete(mediaItem: MediaItemComponent) {
    console.log("Okay deleting this item:", mediaItem);
  }
}