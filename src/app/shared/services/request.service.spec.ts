import { TestBed, inject } from '@angular/core/testing';

import { RequestService } from './request.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { HttpService } from './http.service';

describe('RequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpService,
        HttpClient,
        HttpHandler,
        RequestService
      ]
    });
  });

  it('should be created', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));
});
