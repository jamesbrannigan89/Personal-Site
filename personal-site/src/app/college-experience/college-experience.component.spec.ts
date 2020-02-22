import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegeExperienceComponent } from './college-experience.component';

describe('CollegeExperienceComponent', () => {
  let component: CollegeExperienceComponent;
  let fixture: ComponentFixture<CollegeExperienceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegeExperienceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegeExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
