import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;
  @Input() isReadOnly = false;
  @Output() buyProduct = new EventEmitter<Product>();

  constructor() {}

  onBuy(): void {
    this.buyProduct.emit(this.product);
    console.log(`~ProductComponent~: User bought ${this.product.name} for ${this.product.price}$`);
  }
}
