import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdPage } from './household.page';

describe('HouseholdPage', () => {
  let component: HouseholdPage;
  let fixture: ComponentFixture<HouseholdPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HouseholdPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HouseholdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
