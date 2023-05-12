import { TestBed } from '@angular/core/testing';

import { DeatailService } from './deatail.service';

describe('DeatailService', () => {
  let service: DeatailService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeatailService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
