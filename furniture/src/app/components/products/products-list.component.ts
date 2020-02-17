import {Component, OnInit} from '@angular/core';
import {Products} from '../../store/interfaces/products';

import {ProductsService} from '../../services/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss']
})
export class ProductsListComponent implements OnInit {
  productsList: Products[] = [];
  isLoading = true;

  constructor(
    private service: ProductsService
  ) {}

  ngOnInit() {
    this.service.dispatchProducts();
    this.service.loadProductsState()
      .subscribe(products => {
        this.isLoading = products.isLoading;
        products.items.forEach(product => this.productsList.push(product));
      });
  }
}


