import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleHomedocConfirmComponent } from './schedule-homedoc-confirm.component';

describe('ScheduleHomedocConfirmComponent', () => {
  let component: ScheduleHomedocConfirmComponent;
  let fixture: ComponentFixture<ScheduleHomedocConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleHomedocConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleHomedocConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
