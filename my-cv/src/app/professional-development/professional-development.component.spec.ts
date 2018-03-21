import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalDevelopmentComponent } from './professional-development.component';

describe('ProfessionalDevelopmentComponent', () => {
  let component: ProfessionalDevelopmentComponent;
  let fixture: ComponentFixture<ProfessionalDevelopmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalDevelopmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalDevelopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
