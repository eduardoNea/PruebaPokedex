import { TestBed, inject } from '@angular/core/testing';

import { PokeDetailsService } from './poke-details.service';

describe('PokeDetailsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PokeDetailsService]
    });
  });

  it('should be created', inject([PokeDetailsService], (service: PokeDetailsService) => {
    expect(service).toBeTruthy();
  }));
});
