/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AdminAccountService } from './admin-account.service';

describe('Service: AdminAccount', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AdminAccountService]
    });
  });

  it('should ...', inject([AdminAccountService], (service: AdminAccountService) => {
    expect(service).toBeTruthy();
  }));
});
