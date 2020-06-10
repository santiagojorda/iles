import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestigacionYOpinionComponent } from './investigacion-y-opinion.component';

describe('InvestigacionYOpinionComponent', () => {
  let component: InvestigacionYOpinionComponent;
  let fixture: ComponentFixture<InvestigacionYOpinionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestigacionYOpinionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestigacionYOpinionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
