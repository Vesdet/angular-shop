import {Injectable} from '@angular/core';
import {Product, Categories} from '../model/product.model';

@Injectable()
export class ProductsService {
  private products: Array<Product> = [
    new Product('Banana', 60, true, Categories.Fruit, 'From Madagascar'),
    new Product('Juice', 79, true, Categories.Drink, 'Grenadine juice',
      ['Water', 'Grenadine extract', 'Sugar', 'E36']),
    new Product('Tomato', 145, false, Categories.Vegetables, 'Just yellow tomato'),
  ];

  addProduct(product: Product): void {
    this.products.push(product);
  }

  getProducts(): Array<Product> {
    return this.products;
  }
}
