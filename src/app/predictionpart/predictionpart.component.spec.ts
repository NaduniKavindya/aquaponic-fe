import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PredictionpartComponent } from './predictionpart.component';

describe('PredictionpartComponent', () => {
  let component: PredictionpartComponent;
  let fixture: ComponentFixture<PredictionpartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PredictionpartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PredictionpartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
