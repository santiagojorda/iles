import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenidoArticuloConMenuFlotanteComponent } from './contenido-articulo-con-menu-flotante.component';

describe('ContenidoArticuloConMenuFlotanteComponent', () => {
  let component: ContenidoArticuloConMenuFlotanteComponent;
  let fixture: ComponentFixture<ContenidoArticuloConMenuFlotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenidoArticuloConMenuFlotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenidoArticuloConMenuFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
