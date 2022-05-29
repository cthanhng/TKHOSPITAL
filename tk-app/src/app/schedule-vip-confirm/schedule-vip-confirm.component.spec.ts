import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleVipConfirmComponent } from './schedule-vip-confirm.component';

describe('ScheduleVipConfirmComponent', () => {
  let component: ScheduleVipConfirmComponent;
  let fixture: ComponentFixture<ScheduleVipConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleVipConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleVipConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
