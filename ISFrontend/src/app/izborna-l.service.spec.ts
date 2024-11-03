import { TestBed } from '@angular/core/testing';

import { IzbornaLService } from './izborna-l.service';

describe('IzbornaLService', () => {
  let service: IzbornaLService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzbornaLService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
