import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemodelPage } from './basemodel.page';

describe('BasemodelPage', () => {
  let component: BasemodelPage;
  let fixture: ComponentFixture<BasemodelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemodelPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemodelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
