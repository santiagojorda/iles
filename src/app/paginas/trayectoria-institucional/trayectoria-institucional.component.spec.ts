import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrayectoriaInstitucionalComponent } from './trayectoria-institucional.component';

describe('TrayectoriaInstitucionalComponent', () => {
  let component: TrayectoriaInstitucionalComponent;
  let fixture: ComponentFixture<TrayectoriaInstitucionalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrayectoriaInstitucionalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrayectoriaInstitucionalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
