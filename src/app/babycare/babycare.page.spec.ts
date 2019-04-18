import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BabycarePage } from './babycare.page';

describe('BabycarePage', () => {
  let component: BabycarePage;
  let fixture: ComponentFixture<BabycarePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BabycarePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BabycarePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
