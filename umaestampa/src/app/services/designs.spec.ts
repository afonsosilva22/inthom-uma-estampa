import { TestBed } from '@angular/core/testing';

import { Designs } from './designs';

describe('Designs', () => {
  let service: Designs;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Designs);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
