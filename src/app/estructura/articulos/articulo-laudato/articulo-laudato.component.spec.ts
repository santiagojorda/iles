import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloLaudatoComponent } from './articulo-laudato.component';

describe('ArticuloLaudatoComponent', () => {
  let component: ArticuloLaudatoComponent;
  let fixture: ComponentFixture<ArticuloLaudatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloLaudatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloLaudatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
