import { Directive, HostBinding, Input } from '@angular/core';

@Directive({ 
  selector: '[mwFavorite]' 
})
export class FavoriteDirective {
  constructor() { }
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @Input() set mwFavorite(value: boolean) {
    this.isFavorite = value;
  }
}