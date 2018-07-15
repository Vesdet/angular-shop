import { EventEmitter, Injectable } from '@angular/core';

import { LocalStorageService } from '../../core-module';
import { Product, ProductService } from '../../products-module';
import { Purchase } from '../models/purchase.model';

const STORAGE_FIED_NAME = 'shopCard';

@Injectable({
  providedIn: 'root'
})
export class CardService {
  private purchases: Array<Purchase> = [];
  private totalPrice = 0;
  purchasesUpdate$: EventEmitter<Array<Purchase>> = new EventEmitter();

  constructor(
    public localStorageService: LocalStorageService,
    public productsService: ProductService
  ) {
      const data = localStorageService.getItem(STORAGE_FIED_NAME);
      if (!data || !Array.isArray(data)) { return; }

      data.forEach(pur => {
        this.purchases.push(
          new Purchase(pur.productId, pur.productName, pur.price, pur.count)
        );
        this.productsService.changeQuantityOfProduct(pur.productId, -pur.count);
        this.totalPrice += pur.price * pur.count;
      });
  }

  addProductToCard(productId: number): void {
    let purchase = this.purchases.find(item => item.productId === productId);
    if (purchase) {
      purchase.count++;
    } else {
      const product: Product = this.productsService.getProducts([productId])[0];
      purchase = new Purchase(product.id, product.name, product.price, 1);
      this.purchases.push(purchase);
    }
    this.totalPrice += purchase.price;
    this.localStorageService.setItem(STORAGE_FIED_NAME, this.purchases);
    this.purchasesUpdate$.emit(this.purchases);
  }

  changeProductCountInCard(productId: number, newCount: number): void {
    const purchase = this.purchases.find(item => item.productId === productId);
    if (!purchase) { return; }

    try {
      this.productsService.changeQuantityOfProduct(productId, purchase.count - newCount);
    } catch (e) {
      return;
    }
    this.totalPrice += (newCount - purchase.count) * purchase.price;
    if (newCount === 0) {
      this.purchases.splice(this.purchases.indexOf(purchase), 1);
    } else {
      purchase.count = newCount;
    }
    this.localStorageService.setItem(STORAGE_FIED_NAME, this.purchases);
    this.purchasesUpdate$.emit(this.purchases);
  }

  clearCard(): void {
    this.purchases.forEach(pur => {
      this.productsService.changeQuantityOfProduct(pur.productId, pur.count);
    });
    this.purchases = [];
    this.totalPrice = 0;
    this.localStorageService.removeItem(STORAGE_FIED_NAME);
    this.purchasesUpdate$.emit(this.purchases);
  }

  getPurchases(): Array<Purchase> {
    return this.purchases;
  }

  getTotalPrice(): number {
    return this.totalPrice;
  }
}
