import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PresidenciaYExpertosComponent } from './presidencia-y-expertos.component';

describe('PresidenciaYExpertosComponent', () => {
  let component: PresidenciaYExpertosComponent;
  let fixture: ComponentFixture<PresidenciaYExpertosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PresidenciaYExpertosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PresidenciaYExpertosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
