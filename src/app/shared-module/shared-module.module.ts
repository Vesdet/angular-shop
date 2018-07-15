import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    HighlightDirective
  ],
  declarations: [
    HighlightDirective
  ]
})
export class SharedModule { }
