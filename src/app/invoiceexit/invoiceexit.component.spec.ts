import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceexitComponent } from './invoiceexit.component';

describe('InvoiceexitComponent', () => {
  let component: InvoiceexitComponent;
  let fixture: ComponentFixture<InvoiceexitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceexitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvoiceexitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
