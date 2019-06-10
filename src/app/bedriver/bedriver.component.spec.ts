import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BedriverComponent } from './bedriver.component';

describe('BedriverComponent', () => {
  let component: BedriverComponent;
  let fixture: ComponentFixture<BedriverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BedriverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BedriverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
