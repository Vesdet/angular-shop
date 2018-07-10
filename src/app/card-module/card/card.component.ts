import { Component, OnInit } from '@angular/core';

import { CardService } from '../../core-module';
import { Product } from '../../shared-module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public products: Array<Product>;
  public totalPrice = 0;
  constructor(
    public cardService: CardService
  ) { }

  ngOnInit() {
    this.updateProducts(this.cardService.getPurchases());
    this.cardService.purchasesChange$
      .subscribe(purchases => this.updateProducts(purchases));
  }

  onClear() {
    this.cardService.clearCard();
  }

  private updateProducts(products: Array<Product>): void {
    console.log(products, this.products);
    this.products = products;
    this.totalPrice = products.reduce((acc, it) => acc += it.price, 0);
  }
}
