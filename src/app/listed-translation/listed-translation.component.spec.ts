import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedTranslationComponent } from './listed-translation.component';

describe('ListedTranslationComponent', () => {
  let component: ListedTranslationComponent;
  let fixture: ComponentFixture<ListedTranslationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedTranslationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedTranslationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
