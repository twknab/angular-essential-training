import { Component } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['./media-item.component.scss',],
})

export class MediaItemComponent {
  constructor() { }

  onDelete() {
    console.log('media item delete event');
  }
}