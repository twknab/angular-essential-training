import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['./media-item.component.css',],
})

export class MediaItemComponent {
  name: string;
  watchedOn: number;
  category: string;
  year: number;
  isFavorite: boolean;


  constructor() { }

  @Input() mediaItem : MediaItemComponent;
  @Output() delete = new EventEmitter();

  onDelete() {
    console.log('media item delete event');
    this.delete.emit(this.mediaItem);
  }
}