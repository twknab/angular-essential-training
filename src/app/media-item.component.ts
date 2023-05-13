import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'media-item',
  templateUrl: 'media-item.component.html',
  styleUrls: ['./media-item.component.scss',],
})

export class MediaItemComponent implements OnInit {
  name = "The Redemption"
  wasWatched() {
    return true;
  }
  constructor() { }

  ngOnInit() { }
}