import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloArticuloComponent } from './titulo-articulo.component';

describe('TituloArticuloComponent', () => {
  let component: TituloArticuloComponent;
  let fixture: ComponentFixture<TituloArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TituloArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TituloArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
