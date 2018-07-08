import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { ProductListComponent } from './product-list/product-list.component';

import { ProductsService } from './services/products.service';
import { CardService } from './services/card.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    ProductListComponent,
    CardComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ProductsService,
    CardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
