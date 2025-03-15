import { TestBed } from '@angular/core/testing';

import { UsercrudService } from './usercrud.service';

describe('UsercrudService', () => {
  let service: UsercrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UsercrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
