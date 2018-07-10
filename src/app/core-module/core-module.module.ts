import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardService } from './services/card.service';
import { ProductsService } from './services/products.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    CardService,
    ProductsService
  ]
})
export class CoreModuleModule { }
