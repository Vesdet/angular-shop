import { Component, OnInit } from '@angular/core';

import { CardService } from '../../card-module';
import { Product } from '../models/product.model';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products: Array<Product>;
  constructor(
    public productsService: ProductService,
    public cardService: CardService
  ) { }

  ngOnInit() {
    this.products = this.productsService.getProducts();
  }

  onBuyProduct(product: Product) {
    this.cardService.addProductToCard(product);
    this.productsService.changeQuantityOfProduct(product.id, -1);
  }
}
