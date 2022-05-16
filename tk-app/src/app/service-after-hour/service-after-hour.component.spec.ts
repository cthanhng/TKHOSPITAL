import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceAfterHourComponent } from './service-after-hour.component';

describe('ServiceAfterHourComponent', () => {
  let component: ServiceAfterHourComponent;
  let fixture: ComponentFixture<ServiceAfterHourComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceAfterHourComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceAfterHourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
