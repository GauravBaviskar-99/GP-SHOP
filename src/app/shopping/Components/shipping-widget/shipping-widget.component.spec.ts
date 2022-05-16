import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingWidgetComponent } from './shipping-widget.component';

describe('ShippingWidgetComponent', () => {
  let component: ShippingWidgetComponent;
  let fixture: ComponentFixture<ShippingWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShippingWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
