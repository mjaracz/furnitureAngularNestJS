import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import * as productsReducer from '../../../store/reducers/products';

@Component({
  selector: 'app-list-button',
  templateUrl: './list-button.component.html',
  styleUrls: ['./list-button.component.scss']
})
export class ListButtonComponent implements OnInit {

  constructor(
    private store: Store<{ products: productsReducer.State}>
  ) {}

  ngOnInit(): void {
  }

}
