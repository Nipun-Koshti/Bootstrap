import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgNavComponent } from './bg-nav.component';

describe('BgNavComponent', () => {
  let component: BgNavComponent;
  let fixture: ComponentFixture<BgNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgNavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
