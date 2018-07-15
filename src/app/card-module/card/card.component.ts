import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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

  @ViewChild('warningField')
  private warningField: ElementRef;
  isShowWarning = false;

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

  changePurchaseCount(productId: number, newCount: number) {
    this.cardService.changeProductCountInCard(productId, newCount);
  }

  onWarning(purchase: Purchase) {
    const elem = this.warningField.nativeElement;
    Array.from(elem.getElementsByClassName('purchase-name'))
      .forEach(el => el.innerHTML = purchase.productName);

    this.isShowWarning = true;
    elem.onclick = () => {
      this.isShowWarning = false;
      this.cardService.addProductToCard(purchase.productId);
    };
    setTimeout(() => {
      this.isShowWarning = false;
      elem.onclick = null;
    }, 3000);
  }

  private updatePurchases(purchases: Array<Purchase>): void {
    this.purchases = purchases;
  }
}
