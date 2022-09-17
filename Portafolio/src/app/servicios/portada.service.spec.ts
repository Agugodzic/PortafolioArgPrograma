import { TestBed } from '@angular/core/testing';

import { PortadaService } from './portada.service';

describe('PortadaService', () => {
  let service: PortadaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortadaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
