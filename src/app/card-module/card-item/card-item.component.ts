import { Component, Input } from '@angular/core';

import { Purchase } from '../models/purchase.model';

@Component({
  selector: 'app-card-item',
  templateUrl: './card-item.component.html',
  styleUrls: ['./card-item.component.css']
})
export class CardItemComponent {
  @Input() purchase: Purchase;

  constructor() { }
}
