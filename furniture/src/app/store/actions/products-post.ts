export enum PostProductsType {
  StartPost = '[Component list-button] start fetch added products',
  LoadAddedProducts = '[Components list-button] load added products',
  ErrorAddedProducts = '[Components list-button] error'
}

export class StartAddedProducts {
  readonly type = PostProductsType.StartPost;
}
export class LoadAddedProducts {
  readonly type = PostProductsType.LoadAddedProducts;
  constructor(public payload: unknown) {}
}
export class ErrorAddedProducts {
  readonly type = PostProductsType.ErrorAddedProducts;
  constructor(public payload: Error) {}
}
