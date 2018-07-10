import { EventEmitter, Injectable } from '@angular/core';

import { Product } from '../../shared-module';
import { ProductsService } from './products.service';

const SEPARATOR = ', ';
const STORAGE_FIED_NAME = 'shopCard';

@Injectable({
  providedIn: "root"
})
export class CardService {
  private purchases: Array<Product> = [];
  purchasesChange$: EventEmitter<Array<Product>> = new EventEmitter();

  constructor(
    public productService: ProductsService
  ) {
    try {
      const data = localStorage.getItem(STORAGE_FIED_NAME);
      if (!data) { return; }
      const items = data.split(SEPARATOR);
      items.forEach(item => this.purchases.push(
        productService.createProduct(item)
      ));
    } catch (e) {
      console.error('Local Storage Error:', e);
    }
  }

  addProductToCard(product: Product): void {
    this.purchases.push(product);
    try {
      const data = this.purchases.map(pr => pr.name).join(SEPARATOR);
      localStorage.setItem(STORAGE_FIED_NAME, data);
    } catch (e) {
      console.error('Local Storage Error:', e);
    }
    this.purchasesChange$.emit(this.purchases);
  }

  clearCard(): void {
    this.purchases = [];
    try {
      localStorage.setItem(STORAGE_FIED_NAME, null);
    } catch (e) {
      console.error('Local Storage Error:', e);
    }
    this.purchasesChange$.emit(this.purchases);
  }

  getPurchases(): Array<Product> {
    return this.purchases;
  }
}
