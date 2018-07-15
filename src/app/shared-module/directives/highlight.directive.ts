import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  private highlightColor = '#fff';
  private highlightBgColor = 'mediumpurple';

  @HostBinding('style.color') color;
  @HostBinding('style.backgroundColor') bgColor;

  constructor(el: ElementRef) {}

  @HostListener('mouseover') onMouseOver() {
    this.color = this.highlightColor;
    this.bgColor = this.highlightBgColor;
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.color = '';
    this.bgColor = '';
  }
}
