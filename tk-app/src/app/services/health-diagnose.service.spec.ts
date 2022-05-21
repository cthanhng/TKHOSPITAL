/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { HealthDiagnoseService } from './health-diagnose.service';

describe('Service: HealthDiagnose', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HealthDiagnoseService]
    });
  });

  it('should ...', inject([HealthDiagnoseService], (service: HealthDiagnoseService) => {
    expect(service).toBeTruthy();
  }));
});
