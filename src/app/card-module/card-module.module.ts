import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared-module.module';

import { CardComponent } from './card/card.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardService } from './services/card.service';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    CardComponent
  ],
  declarations: [
    CardComponent,
    CardItemComponent
  ],
  providers: [
    CardService
  ]
})
export class CardModule { }
