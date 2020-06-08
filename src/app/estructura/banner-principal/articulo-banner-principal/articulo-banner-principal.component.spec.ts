import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticuloBannerPrincipalComponent } from './articulo-banner-principal.component';

describe('ArticuloBannerPrincipalComponent', () => {
  let component: ArticuloBannerPrincipalComponent;
  let fixture: ComponentFixture<ArticuloBannerPrincipalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArticuloBannerPrincipalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticuloBannerPrincipalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
