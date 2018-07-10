import { Injectable } from '@angular/core';

import { Product, Categories } from '../../shared-module';

@Injectable({
  providedIn: "root"
})
export class ProductsService {
  private products: Array<Product> = [
    this.createProduct('Banana'),
    this.createProduct('Juice'),
    this.createProduct('Tomato')
  ];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Array<Product> {
    return this.products;
  }

  createProduct(name: string) {
    switch (name) {
      case 'Banana':
        return new Product(name, 60, true, Categories.Fruit, 'From Madagascar');
      case 'Juice':
        return new Product(name, 79, true, Categories.Drink, 'Grenadine juice',
          ['Water', 'Grenadine extract', 'Sugar', 'E36']);
      case 'Tomato':
        return new Product(name, 145, false, Categories.Vegetable, 'Just yellow tomato');
      default:
        return new Product();
    }
  }
}
