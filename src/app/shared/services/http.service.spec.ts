import { TestBed, inject } from '@angular/core/testing';

import { HttpService } from './http.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('HttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HttpClient,
        HttpHandler,
        HttpService
      ]
    });
  });

  it('should be created', inject([HttpService], (service: HttpService) => {
    expect(service).toBeTruthy();
  }));
});
