import { Component, EventEmitter, Input, Output } from '@angular/core';

import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Output() buyProduct = new EventEmitter<Product>();

  constructor() {}

  onBuy(event): void {
    event.stopPropagation();
    this.buyProduct.emit(this.product);
    console.log(`~ProductComponent~: User bought ${this.product.name} for ${this.product.price}$`);
  }
}
