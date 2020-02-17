import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '@ngrx/store';
import * as fromReducer from '../store/reducers/products';
import * as fromAction from '../store/actions/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(
    private http: HttpClient,
    private store: Store<{ products: fromReducer.State}>
  ) {}

  httpGetAllProducts() {
    return this.http.get('http://localhost:3000/products', { headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': 'http://localhost:3000',
    }});
  }
  httpPostNewCart(products) {
    return this.http.post('http://localhost:3000/create', {})
  }
  dispatchProducts(): void {
    this.store.dispatch(new fromAction.GetAllProducts());
  }
  loadProductsState() {
    return this.store.select(state => state.products);
  }
}
