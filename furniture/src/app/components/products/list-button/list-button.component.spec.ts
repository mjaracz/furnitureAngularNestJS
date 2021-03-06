import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListButtonComponent } from './list-button.component';

describe('AddButtonComponent', () => {
  let component: ListButtonComponent;
  let fixture: ComponentFixture<ListButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
