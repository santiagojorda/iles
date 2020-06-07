import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloConMenuFlotanteComponent } from './articulo-con-menu-flotante.component';

describe('ArticuloConMenuFlotanteComponent', () => {
  let component: ArticuloConMenuFlotanteComponent;
  let fixture: ComponentFixture<ArticuloConMenuFlotanteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloConMenuFlotanteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloConMenuFlotanteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
