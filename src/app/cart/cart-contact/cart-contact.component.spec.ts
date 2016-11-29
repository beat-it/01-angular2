/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CartContactComponent } from './cart-contact.component';

describe('CartContactComponent', () => {
  let component: CartContactComponent;
  let fixture: ComponentFixture<CartContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
