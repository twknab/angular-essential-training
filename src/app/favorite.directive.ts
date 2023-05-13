import { Directive, HostBinding, HostListener, Input } from '@angular/core';

@Directive({ 
  selector: '[mwFavorite]' 
})
export class FavoriteDirective {
  constructor() { }
  @HostBinding('class.is-favorite') isFavorite: boolean = true;
  @HostBinding('class.is-favorite-hovering') hovering = false;
  @HostListener('mouseenter') onMouseEnter() {
    this.hovering = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.hovering = false;
  }
  @Input() set mwFavorite(value: boolean) {
    this.isFavorite = value;
  }
}