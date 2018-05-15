import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CakeshowComponent } from './cakeshow.component';

describe('CakeshowComponent', () => {
  let component: CakeshowComponent;
  let fixture: ComponentFixture<CakeshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CakeshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CakeshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
