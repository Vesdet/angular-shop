import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CardModule } from './card-module/card-module.module';
import { ProductsModule } from './products-module/products-module.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    CardModule,
    ProductsModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
