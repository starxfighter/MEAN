import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashdcComponent } from './washdc.component';

describe('WashdcComponent', () => {
  let component: WashdcComponent;
  let fixture: ComponentFixture<WashdcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashdcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashdcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
