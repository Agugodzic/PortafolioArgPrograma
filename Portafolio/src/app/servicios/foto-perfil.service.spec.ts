import { TestBed } from '@angular/core/testing';

import { FotoPerfilService } from './foto-perfil.service';

describe('FotoPerfilService', () => {
  let service: FotoPerfilService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FotoPerfilService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
