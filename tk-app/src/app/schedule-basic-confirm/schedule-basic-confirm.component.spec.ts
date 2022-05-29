import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleBasicConfirmComponent } from './schedule-basic-confirm.component';

describe('ScheduleBasicConfirmComponent', () => {
  let component: ScheduleBasicConfirmComponent;
  let fixture: ComponentFixture<ScheduleBasicConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleBasicConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleBasicConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
