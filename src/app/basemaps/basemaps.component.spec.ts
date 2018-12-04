import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BasemapsComponent } from './basemaps.component';

describe('BasemapsComponent', () => {
  let component: BasemapsComponent;
  let fixture: ComponentFixture<BasemapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasemapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasemapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
