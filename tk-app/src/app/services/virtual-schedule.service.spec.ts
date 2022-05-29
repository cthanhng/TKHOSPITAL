import { TestBed } from '@angular/core/testing';

import { VirtualScheduleService } from './virtual-schedule.service';

describe('VirtualScheduleService', () => {
  let service: VirtualScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VirtualScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
