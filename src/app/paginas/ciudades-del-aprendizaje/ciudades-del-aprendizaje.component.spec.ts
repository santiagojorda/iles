import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CiudadesDelAprendizajeComponent } from './ciudades-del-aprendizaje.component';

describe('CiudadesDelAprendizajeComponent', () => {
  let component: CiudadesDelAprendizajeComponent;
  let fixture: ComponentFixture<CiudadesDelAprendizajeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CiudadesDelAprendizajeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CiudadesDelAprendizajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
