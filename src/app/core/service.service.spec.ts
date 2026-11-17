import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ServiceService } from './service.service';

describe('ServiceService', () => {
  let service: ServiceService;
  let http: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule] });
    service = TestBed.get(ServiceService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach(() => http.verify());

  it('should read the server answer as plain text', () => {
    let answer: string;
    service.get().subscribe(text => answer = text);

    const req = http.expectOne('/api/');
    expect(req.request.responseType).toBe('text');
    req.flush('Купи слона');

    expect(answer).toBe('Купи слона');
  });
});
