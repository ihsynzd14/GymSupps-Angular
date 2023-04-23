import { TestBed } from '@angular/core/testing';

import { SuppService } from './supp.service';

describe('SuppService', () => {
  let service: SuppService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SuppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
