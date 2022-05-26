import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurDoctorComponent } from './our-doctor.component';

describe('OurDoctorComponent', () => {
  let component: OurDoctorComponent;
  let fixture: ComponentFixture<OurDoctorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OurDoctorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OurDoctorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
