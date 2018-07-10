import { Component, OnInit } from '@angular/core';

import { CardService, ProductsService } from '../../core-module';
import { Product } from '../../shared-module';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Array<Product>;

  constructor(
    public productsService: ProductsService,
    public cardService: CardService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product) {
    this.cardService.addProductToCard(product);
  }
}
