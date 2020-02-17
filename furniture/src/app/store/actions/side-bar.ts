import {Action} from '@ngrx/store';

export const SHOW = '[SideBar Component] SHOW';

export class ShowAction implements Action {
  readonly type = SHOW;
}
