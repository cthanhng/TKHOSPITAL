import { TestBed } from '@angular/core/testing';

import { OurDoctorService } from './our-doctor.service';

describe('OurDoctorService', () => {
  let service: OurDoctorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OurDoctorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
