import { Component, OnInit } from '@angular/core';

import { CardService } from '../services/card.service';
import { Purchase } from '../models/purchase.model';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public purchases: Array<Purchase>;
  public totalPrice: number;
  constructor(
    public cardService: CardService
  ) { }

  ngOnInit() {
    this.updatePurchases(this.cardService.getPurchases());
    this.totalPrice = this.cardService.getTotalPrice();

    this.cardService.purchasesUpdate$
      .subscribe(purchases => {
        this.updatePurchases(purchases);
        this.totalPrice = this.cardService.getTotalPrice();
      });
  }

  onClear() {
    this.cardService.clearCard();
  }

  private updatePurchases(products: Array<Purchase>): void {
    this.purchases = products;
  }
}
