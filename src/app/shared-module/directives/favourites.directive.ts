import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appFavourites]'
})
export class FavouritesDirective implements OnInit {
  private favoriteEl: HTMLDivElement;
  @Input() appFavourites: string;

  constructor(private renderer: Renderer2, private el: ElementRef) {
    this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');

    const star = this.renderer.createElement('div');
    this.renderer.addClass(star, 'star');

    this.favoriteEl = this.renderer.createElement('div');
    this.renderer.addClass(this.favoriteEl, 'star-container');
    this.renderer.appendChild(this.favoriteEl, star);
  }

  ngOnInit() {
    this.renderer.setStyle(this.favoriteEl, 'color', this.appFavourites);
    this.renderer.setStyle(this.favoriteEl, 'border-bottom-color', this.appFavourites);
  }

  @HostListener('click')
  onClick() {
    const el = this.el.nativeElement;
    if (Array.from(el.children).includes(this.favoriteEl)) {
      this.renderer.removeChild(this.el.nativeElement, this.favoriteEl);
    } else {
      this.renderer.appendChild(this.el.nativeElement, this.favoriteEl);
    }
  }
}
