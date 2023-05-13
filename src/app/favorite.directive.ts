import { Directive, HostBinding } from '@angular/core';

@Directive({ 
  selector: '[mwFavorite]' 
})
export class FavoriteDirective {
  constructor() { }
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
}