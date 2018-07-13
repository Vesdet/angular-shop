import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared-module/shared-module.module';

import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductService } from './services/product.service';

@NgModule({
  imports: [
    CommonModule,

    SharedModule
  ],
  exports: [
    ProductListComponent
  ],
  declarations: [
    ProductComponent,
    ProductListComponent,
  ],
  providers: [
    ProductService
  ]
})
export class ProductsModule { }
