import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleVirtualConfirmComponent } from './schedule-virtual-confirm.component';

describe('ScheduleVirtualConfirmComponent', () => {
  let component: ScheduleVirtualConfirmComponent;
  let fixture: ComponentFixture<ScheduleVirtualConfirmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScheduleVirtualConfirmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleVirtualConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
