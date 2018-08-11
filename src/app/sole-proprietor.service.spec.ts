import { TestBed, inject } from '@angular/core/testing';

import { SoleProprietorService } from './sole-proprietor.service';

describe('SoleProprietorService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SoleProprietorService]
    });
  });

  it('should be created', inject([SoleProprietorService], (service: SoleProprietorService) => {
    expect(service).toBeTruthy();
  }));
});
