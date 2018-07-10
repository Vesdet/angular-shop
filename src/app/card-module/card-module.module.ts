import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from './card/card.component';
import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    CardComponent
  ],
  declarations: [
    CardComponent
  ]
})
export class CardModule { }
