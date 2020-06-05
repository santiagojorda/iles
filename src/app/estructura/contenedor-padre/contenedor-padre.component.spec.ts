import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPadreComponent } from './contenedor-padre.component';

describe('ContenedorPadreComponent', () => {
  let component: ContenedorPadreComponent;
  let fixture: ComponentFixture<ContenedorPadreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContenedorPadreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContenedorPadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
