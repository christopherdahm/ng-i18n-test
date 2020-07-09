import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PuppyTranslationsComponent } from './puppy-translations.component';

describe('PuppyTranslationsComponent', () => {
  let component: PuppyTranslationsComponent;
  let fixture: ComponentFixture<PuppyTranslationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PuppyTranslationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PuppyTranslationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
