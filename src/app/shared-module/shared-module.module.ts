import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { FavouritesDirective } from './directives/favourites.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    FavouritesDirective,
    HighlightDirective
  ],
  declarations: [
    FavouritesDirective,
    HighlightDirective
  ]
})
export class SharedModule { }
