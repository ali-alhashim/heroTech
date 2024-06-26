import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItAssetsComponent } from './it-assets.component';

describe('ItAssetsComponent', () => {
  let component: ItAssetsComponent;
  let fixture: ComponentFixture<ItAssetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItAssetsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItAssetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
