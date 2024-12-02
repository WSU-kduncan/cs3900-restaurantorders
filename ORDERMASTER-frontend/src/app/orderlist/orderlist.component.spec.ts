

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderlistComponent } from './orderlist.component';

import { ReactiveFormsModule } from '@angular/forms';

describe('OrderlistComponent', () => {

  let component: OrderlistComponent;

  let fixture: ComponentFixture<any>;

  beforeEach(async () => {

    await TestBed.configureTestingModule({

      declarations: [ OrderlistComponent ],

      imports: [ ReactiveFormsModule ]

    })

    .compileComponents();

    fixture = TestBed.createComponent(OrderlistComponent);

    component = fixture.componentInstance;

    fixture.detectChanges();

  });

  it('should create', () => {

    expect(component).toBeTruthy();

  });

  it('should have invalid form when empty', () => {

    expect(component.orders).toBeFalsy();

  });

  it('should have an ID', () => {

    const orderId = component.orders['orderId'];

    orderId.setValue('');

    expect(orderId.valid).toBeFalsy();

    orderId.setValue('1');

    expect(orderId.valid).toBeTruthy();

  });

  // Add more tests to reach at least 80% code coverage

});