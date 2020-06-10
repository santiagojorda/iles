import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubTituloArticuloComponent } from './sub-titulo-articulo.component';

describe('SubTituloArticuloComponent', () => {
  let component: SubTituloArticuloComponent;
  let fixture: ComponentFixture<SubTituloArticuloComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubTituloArticuloComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubTituloArticuloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
