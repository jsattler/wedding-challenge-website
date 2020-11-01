import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeStepperComponent } from './challenge-stepper.component';

describe('ChallengeStepperComponent', () => {
  let component: ChallengeStepperComponent;
  let fixture: ComponentFixture<ChallengeStepperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChallengeStepperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengeStepperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
