import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTwoComponent } from './bg-two.component';

describe('BgTwoComponent', () => {
  let component: BgTwoComponent;
  let fixture: ComponentFixture<BgTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BgTwoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
