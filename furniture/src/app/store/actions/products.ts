import {Action} from '@ngrx/store';
import {Products} from '../interfaces/products';

export enum GetProductsType {
  StartGet = '[Products Component] get all products',
  FetchSuccess = '[Products Component] fetch success',
  FetchFailure = '[Products Component] fetch error',
}


export class GetAllProducts implements Action {
  readonly type = GetProductsType.StartGet;
}

export class FetchProductsSuccess implements Action {
  readonly type = GetProductsType.FetchSuccess;
  constructor(public payload: Products[]) {}
}

export class FetchProductsFailure implements Action {
  readonly type = GetProductsType.FetchFailure;
  constructor(public payload: Error) {}
}



export type Actions = GetAllProducts | FetchProductsSuccess | FetchProductsFailure;
