import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';

@Injectable()
export class CardService {
  private purchases: Array<Product> = [];

  addProductToCard(product: Product): void {
    this.purchases.push(product);

    console.log(this.purchases);
  }
}
