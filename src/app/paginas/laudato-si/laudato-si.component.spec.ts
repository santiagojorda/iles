import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LaudatoSiComponent } from './laudato-si.component';

describe('LaudatoSiComponent', () => {
  let component: LaudatoSiComponent;
  let fixture: ComponentFixture<LaudatoSiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LaudatoSiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LaudatoSiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
