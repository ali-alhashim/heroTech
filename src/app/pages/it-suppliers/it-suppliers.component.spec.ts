import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItSuppliersComponent } from './it-suppliers.component';

describe('ItSuppliersComponent', () => {
  let component: ItSuppliersComponent;
  let fixture: ComponentFixture<ItSuppliersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItSuppliersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItSuppliersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
