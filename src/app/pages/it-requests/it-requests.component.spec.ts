import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItRequestsComponent } from './it-requests.component';

describe('ItRequestsComponent', () => {
  let component: ItRequestsComponent;
  let fixture: ComponentFixture<ItRequestsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItRequestsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItRequestsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
