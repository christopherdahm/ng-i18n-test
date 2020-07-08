import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NothingSpecialComponent } from './nothing-special.component';

describe('NothingSpecialComponent', () => {
  let component: NothingSpecialComponent;
  let fixture: ComponentFixture<NothingSpecialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NothingSpecialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NothingSpecialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
