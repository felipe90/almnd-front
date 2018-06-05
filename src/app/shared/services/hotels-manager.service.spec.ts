import { TestBed, inject } from '@angular/core/testing';

import { HotelsManagerService } from './hotels-manager.service';

describe('HotelsManagerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HotelsManagerService]
    });
  });

  it('should be created', inject([HotelsManagerService], (service: HotelsManagerService) => {
    expect(service).toBeTruthy();
  }));
});
