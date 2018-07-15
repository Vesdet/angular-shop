import { Component, EventEmitter, Input, OnDestroy, Output } from '@angular/core';

import { Purchase } from '../models/purchase.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent implements OnDestroy {
  @Input() purchase: Purchase;
  @Output() changeCount = new EventEmitter<number>();
  @Output() remove = new EventEmitter();

  constructor() { }

  onRemoveFromCard(): void {
    console.log('~CardItemComponent::onRemoveFromCard~', this.purchase.productName);
    this.changeCount.emit(0);
  }

  onChangeCount(count: number): void {
    console.log('~CardItemComponent::onChangeCount~', this.purchase.productName, count);
    this.changeCount.emit(this.purchase.count + count);
  }

  ngOnDestroy() {
    console.log('~CardItemComponent::ngOnDestroy~');
    this.remove.emit();
  }
}
