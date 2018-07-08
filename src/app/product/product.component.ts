import { Component, Input } from '@angular/core';
import { Product } from '../model/product.model';
import { CardService } from '../services/card.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input() product: Product;

  constructor(
    public cardService: CardService
  ) {}

  onBuy(): void {
    this.cardService.addProductToCard(this.product);
    console.log(`User bought ${this.product.name} for ${this.product.price}$`);
  }
}
