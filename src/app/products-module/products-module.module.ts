import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductListComponent } from './product-list/product-list.component';

import { SharedModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    ProductListComponent
  ],
  declarations: [
    ProductListComponent,
  ],
})
export class ProductsModule { }
