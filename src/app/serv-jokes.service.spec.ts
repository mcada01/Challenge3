import { TestBed, inject } from '@angular/core/testing';

import { ServJokesService } from './serv-jokes.service';

describe('ServJokesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ServJokesService]
    });
  });

  it('should be created', inject([ServJokesService], (service: ServJokesService) => {
    expect(service).toBeTruthy();
  }));
});
