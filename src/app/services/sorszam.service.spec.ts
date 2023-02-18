import { TestBed } from '@angular/core/testing';

import { SorszamService } from './sorszam.service';

describe('SorszamService', () => {
  let service: SorszamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SorszamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
