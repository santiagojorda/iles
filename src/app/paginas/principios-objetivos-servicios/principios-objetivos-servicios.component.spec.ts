import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipiosObjetivosServiciosComponent } from './principios-objetivos-servicios.component';

describe('PrincipiosObjetivosServiciosComponent', () => {
  let component: PrincipiosObjetivosServiciosComponent;
  let fixture: ComponentFixture<PrincipiosObjetivosServiciosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrincipiosObjetivosServiciosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrincipiosObjetivosServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
