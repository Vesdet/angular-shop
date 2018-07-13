import { Injectable } from '@angular/core';

import { Product, Categories } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private lastProductId = 0;
  private products: Map<number, Product> = new Map();
  private quantity: Map<number, number> = new Map();

  constructor() {
    this.addProduct('Banana', 6);
    this.addProduct('Juice', 2);
    this.addProduct('Tomato', 5);

    console.log(this.products);
  }

  getProducts(ids?: Array<number>): Array<Product> {
    if (!ids) {
      return Array.from(this.products.values());
    }
    return ids.map(productId => this.products.get(productId));
  }

  addProduct(product: (string | Product), quantity?: number) {
    const value = (product instanceof Product) ? product : this.productFromName(product);
    if (!quantity) { value.isAvailable = false; }
    this.products.set(value.id, value);
    this.quantity.set(value.id, quantity || 0);
  }

  changeQuantityOfProduct(productId: number, value: number) {
    const currentValue = this.quantity.get(productId);
    const nextValue = currentValue + value;
    if (nextValue < 0) {
      throw Error('Count of product can\'t be less then 0');
    }
    this.quantity.set(productId, nextValue);
    if (nextValue === 0) {
      this.products.get(productId).isAvailable = false;
    }
    if (currentValue === 0) {
      this.products.get(productId).isAvailable = true;
    }
    console.log(`Product ${productId}: ${nextValue} units`);
  }

  private productFromName(productName: string) {
    switch (productName) {
      case 'Banana':
        return new Product(this.lastProductId++, productName, 60, true, Categories.Fruit, 'From Madagascar');
      case 'Juice':
        return new Product(this.lastProductId++, productName, 79, true, Categories.Drink, 'Grenadine juice',
          ['Water', 'Grenadine extract', 'Sugar', 'E36']);
      case 'Tomato':
        return new Product(this.lastProductId++, productName, 145, true, Categories.Vegetable, 'Just yellow tomato');
      default:
        return new Product(this.lastProductId++, null, null, null);
    }
  }
}
