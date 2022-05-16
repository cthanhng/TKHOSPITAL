import { TestBed } from '@angular/core/testing';

import { BasicScheduleService } from './basic-schedule.service';

describe('BasicScheduleService', () => {
  let service: BasicScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BasicScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
