import { TestBed } from '@angular/core/testing';

import { IzboriService } from './izbori.service';

describe('IzboriService', () => {
  let service: IzboriService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IzboriService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
