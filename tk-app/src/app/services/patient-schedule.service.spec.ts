/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PatientScheduleService } from './patient-schedule.service';

describe('Service: PatientSchedule', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatientScheduleService]
    });
  });

  it('should ...', inject([PatientScheduleService], (service: PatientScheduleService) => {
    expect(service).toBeTruthy();
  }));
});
