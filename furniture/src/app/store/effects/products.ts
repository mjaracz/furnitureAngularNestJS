import {Injectable} from '@angular/core';
import {catchError, map, mergeMap} from 'rxjs/operators';
import {of} from 'rxjs';

import {Actions, createEffect, ofType} from '@ngrx/effects';

import {ProductsService} from '../../services/products.service';
import {Products} from '../interfaces/products';
import * as productsAction from '../actions/products';


@Injectable()
export class ProductsEffects {

  loadProducts$ = createEffect(() => this.actions$.pipe(
    ofType(productsAction.GetProductsType.StartGet),
    mergeMap(() => this.service.httpGetAllProducts()
      .pipe(
        map((products: Products[]) => ({type: productsAction.GetProductsType.FetchSuccess, payload: products})),
        catchError(err => of({type: productsAction.GetProductsType.FetchFailure, payload: err}))
      ))
  ));

  constructor(
    private actions$: Actions,
    private service: ProductsService
  ) {}
}
