import {Cart} from "../interfaces/carts";

export enum ActionType {
  StartFetch = '[Component list-button] start fetch added products',
  FetchSuccess = '[Components list-button] load added products',
  FetchFailure = '[Components list-button] error'
}

export class StartFetch {
  readonly type = ActionType.StartFetch;
}
export class FetchSuccess {
  readonly type = ActionType.FetchSuccess;
  constructor(public payload: Cart[]) {}
}
export class FetchFailure {
  readonly type = ActionType.FetchFailure;
  constructor(public payload: Error) {}
}

export type Action = StartFetch | FetchSuccess | FetchFailure;
